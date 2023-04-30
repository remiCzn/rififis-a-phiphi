use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize, Clone)]
pub struct Player {
    pub name: String,
    pub alive: bool,
    pub sick: bool,
    pub connected: bool,
}

impl Default for Player {
    fn default() -> Self {
        Self {
            name: Default::default(),
            alive: true,
            sick: false,
            connected: true,
        }
    }
}

impl Player {
    pub fn new(name: String) -> Self {
        Self {
            name: name,
            ..Default::default()
        }
    }
}
