use std::collections::{HashSet, BTreeSet};
use rand::Rng;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Copy, Deserialize, Serialize)]
#[repr(u8)]
pub enum Weather {
    Drougth =  1,
    Downpour = 2,
    Monsoon = 3,
    Ouragan = 99
}

#[derive(Deserialize, Serialize)]
#[serde(tag = "type")]
#[serde(rename_all = "PascalCase")]
pub enum PlayerAction {
    LogIn { player_name: String },
    CollectFood,
    CollectWater,
    CollectWood { player_name: String, draws: u8 }
}

impl Default for Weather {
    fn default() -> Weather {
        Weather::random()
    }
}

impl Weather {
    pub fn random() -> Weather {
        match rand::thread_rng().gen_range(1..4) {
            1 => Weather::Drougth,
            2 => Weather::Downpour,
            3 => Weather::Monsoon,
            _ => Weather::Ouragan
        }
    }
}

pub enum WoodBoxItem {

}

#[derive(Debug, Default, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GameState {
    weather: Weather,
    players: BTreeSet<String>,
    current_water: u8,
    current_wood: u8,
    current_food: u8,
    current_player: String,
    alive_players: BTreeSet<u8>,
    sick_players: BTreeSet<u8>,
    turn_count: u8,
    started: bool
}


impl GameState {
    pub fn draw_wood(&mut self, player_name: String, draws: u8) {
        ()
    }

    pub fn draw_food(&mut self) {
        match rand::thread_rng().gen_range(0.0..=1.0) {
            x if x < 0.5 => self.current_food += 1,
            x if x < 5.0/6.0 => self.current_food += 2,
            _ => self.current_food += 3
        }   
    }

    pub fn collect_water(&mut self) {
        self.current_water += self.weather as u8;
    }

    pub fn add_player(&mut self, player_name: String) {
        if self.started { 
            return; 
        }
        self.players.insert(player_name.to_string());
        if self.players.is_empty() {
            self.current_player = player_name;
        }
    }

    pub fn perform_action(&mut self, action: PlayerAction) {
        println!("Performing action : {} \non current game state.", serde_json::to_string_pretty(&action).unwrap());
        match action {
            PlayerAction::LogIn { player_name } => self.add_player(player_name),
            PlayerAction::CollectFood => self.draw_food(),
            PlayerAction::CollectWater => self.collect_water(),
            PlayerAction::CollectWood { player_name, draws } => self.draw_wood(player_name, draws),
        }
    }
}