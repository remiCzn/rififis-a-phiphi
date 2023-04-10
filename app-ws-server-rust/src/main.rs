use tokio::{net::TcpListener, sync::mpsc};
use tokio_tungstenite::accept_async;

mod connection;
mod game;
mod message;

#[tokio::main]
async fn main() {
    let addr = "0.0.0.0:8080";
    let listener = TcpListener::bind(addr).await.unwrap();
    let (lobby_sender, lobby_receiver) = mpsc::unbounded_channel::<String>();

    println!("Server running on {addr}");
    while let Ok((stream, peer)) = listener.accept().await {
        let lobby_sender = lobby_sender.clone();
        match accept_async(stream).await {
            Ok(ws_stream) => {
                println!("New connection: {peer}");
                // tokio::spawn()
            }
            Err(e) => println!("Websocket connection error: {e}"),
        }
    }
}
