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
    gameState: { players: new Map<number, Player>(), currentFood: 0, currentWater: 0, currentWood: 0, currentPlayer: 0, turnCount: 0, weather: 0, storm: false, started: false }
  })


export type GameState = {
  weather: number,
  storm: Boolean,
  players: Map<number, Player>,
  currentWater: number,
  currentWood: number,
  currentFood: number,
  currentPlayer: number,
  turnCount: number,
  started: Boolean
}

export type Player = {
  name: string,
  alive: Boolean,
  sick: Boolean,
  connected: Boolean
}