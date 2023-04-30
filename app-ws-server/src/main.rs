use std::{sync::Arc, net::SocketAddr, mem, collections::{HashMap}};
mod game_state;
use game_state::{GameState, PlayerAction};
use axum::{extract::{ws::{WebSocket, Message}, WebSocketUpgrade}, Router, Extension, response::IntoResponse, routing::{get, post}};
use futures::{lock::Mutex, stream::SplitSink, SinkExt, StreamExt};
use serde_json::Error;


#[derive(Debug, Default)]
pub struct WsState {
    game_state: Mutex<GameState>,
    txs: Mutex<Vec<SplitSink<WebSocket, Message>>>
}

impl WsState {
    async fn add_session(&self, tx: SplitSink<WebSocket, Message>) {
        let mut txs = self.txs.lock().await;
        txs.push(tx);
    }

    async fn process_msg(&self, action: PlayerAction) -> Result<(), Error> {
        let mut game_state = self.game_state.lock().await;
        game_state.perform_action(action);
        let message = serde_json::to_string(&game_state.clone())?;
        let mut txs = self.txs.lock().await;
        for mut tx in mem::take(&mut *txs) {
            if let Err(err) = tx.send(Message::Text(message.clone())).await {
                println!("Client disconnected: {}", err);
                
            } else {
                txs.push(tx)
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

    state.add_session(tx).await;

    while let Some(Ok(msg)) = rx.next().await {
        if let Message::Text(text) = msg {
            if let Ok(action) = serde_json::from_str::<PlayerAction>(&text) {
                if let Err(err) = state.process_msg(action).await {
                    println!("Error applying state:{}", err);
                }
            } else {
                println!("Unknown action received:{}", text);
            }
        }
    }
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


