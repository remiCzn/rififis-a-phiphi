use std::net::TcpStream;

use futures_util::stream::SplitSink;
use tokio::sync::mpsc::UnboundedSender;
use tokio_tungstenite::{tungstenite::{Message, WebSocket}, WebSocketStream};

pub struct Connection {
    pub sender: SplitSink<WebSocket<TcpStream>, Message>,
}

impl Connection {
    pub fn new(sender: SplitSink<WebSocket<TcpStream>, Message>) -> Self {
        Self { sender }
    }

    pub fn connect(ws_stream: WebSocketStream<TcpStream>, lobby_sender: UnboundedSender<Message>) {

    }

    pub fn listen()
}
