use std::{sync::Arc, net::SocketAddr, mem, collections::{HashMap}};
use game_state::{GameState, PlayerAction};
use axum::{extract::{ws::{WebSocket, Message}, WebSocketUpgrade}, Router, Extension, response::IntoResponse, routing::{get, post}};
use futures::{lock::Mutex, stream::SplitSink, SinkExt, StreamExt};
use serde_json::Error;

mod game_state;
mod player;

#[derive(Debug, Default)]
pub struct WsState {
    pub game_state: Mutex<GameState>,
    txs: Mutex<HashMap<u8, SplitSink<WebSocket, Message>>>
}

impl WsState {
    async fn add_session(&self, tx: SplitSink<WebSocket, Message>) -> u8 {
        let mut txs = self.txs.lock().await;
        let id = txs.len() as u8;
        txs.insert(id, tx);
        id
    }

    async fn close_session(&self, id: u8) {
        let mut txs = self.txs.lock().await;
        txs.remove(&id);
        let mut game = self.game_state.lock().await;
        game.on_player_disconnected(id);
    }

    async fn process_msg(&self, action: PlayerAction, id: u8) -> Result<(), Error> {
        let mut game_state = self.game_state.lock().await;
        game_state.perform_action(action, id);
        let message = serde_json::to_string(&game_state.clone())?;
        let mut txs = self.txs.lock().await;
        println!("{:?}", txs.keys());
        for (id, mut tx) in mem::take(&mut *txs) {
            if let Err(err) = tx.send(Message::Text(message.clone())).await {
                println!("Client disconnected: {}", err);
                
            } else {
                txs.insert(id, tx);
            }
        }
        Ok(())
    }
}

async fn ws_handler(
    ws: WebSocketUpgrade,
    Extension(state): Extension<Arc<WsState>>,
) -> impl IntoResponse {
    println!("New Websocket Connection");
    ws.on_upgrade(|socket| handle_socket(socket, state))
}

pub async fn handle_socket(socket: WebSocket, state: Arc<WsState>) {
    let (tx, mut rx) = socket.split();

    let id = state.add_session(tx).await;

    while let Some(Ok(msg)) = rx.next().await {
        if let Message::Text(text) = msg {
            if let Ok(action) = serde_json::from_str::<PlayerAction>(&text) {
                if let Err(err) = state.process_msg(action, id).await {
                    println!("Error applying state:{}", err);
                }
            } else {
                println!("Unknown action received:{}", text);
            }
        }
    }

    state.close_session(id).await;
}

#[tokio::main]
async fn main() {

    let app = Router::new()
        .route("/ws", get(ws_handler))
        .layer(Extension(Arc::new(WsState::default())));

    let addr = SocketAddr::from(([127, 0, 0, 1], 1234));

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}


