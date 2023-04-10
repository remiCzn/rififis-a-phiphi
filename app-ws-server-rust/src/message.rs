use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub enum Message {
    Connection(Connection),
    NewUser(NewUser),
    Users(Vec<String>),
}

#[derive(Serialize, Deserialize, Clone)]
struct Connection {
    name: String,
}

#[derive(Serialize, Deserialize, Clone)]
struct NewUser {
    name: String,
}

#[derive(Serialize, Deserialize, Clone)]
struct Users {
    users: Vec<String>,
}

#[derive(Serialize, Deserialize)]
pub struct RawMessage {
    r#type: String,
    value: Message,
}

impl Message {
    pub fn to_string(&self) -> String {
        let t = match self {
            Message::Connection(_) => "CONNECTION",
            Message::NewUser(_) => "N_USER",
            Message::Users(_) => "USERS",
        };
        return serde_json::to_string(&RawMessage {
            r#type: t.to_string(),
            value: self.clone(),
        })
        .unwrap();
    }
    pub fn parse(raw: &str) -> Message {
        let data = serde_json::from_str::<RawMessage>(raw).unwrap();
        return data.value;
    }
}
