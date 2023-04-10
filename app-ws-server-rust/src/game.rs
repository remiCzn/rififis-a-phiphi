use std::collections::HashMap;

use uuid::Uuid;

use crate::connection::Connection;

pub struct Game {
    connections: HashMap<Uuid, Connection>,
}
