import { reactive } from 'vue'
import WebsocketClient from './websocket'

export const stateStore = reactive(<
  {
    websocket: WebsocketClient
    joined: boolean
    gameState: GameState
  }
>{
  websocket: new WebsocketClient(),
  joined: false,
  gameState: { players: new Map<number,Player>(), current_food:0,current_water:0,current_wood:0, current_player:0, turn_count:0, weather: 0, storm: false, started: false }
})


export type GameState = {
  weather: number,
  storm: Boolean,
  players: Map<number, Player>,
  current_water: number,
  current_wood: number,
  current_food: number,
  current_player: number,
  turn_count: number,
  started: Boolean
}

export type Player = {
  name: String,
  alive: Boolean,
  sick: Boolean,
  connected: Boolean
}