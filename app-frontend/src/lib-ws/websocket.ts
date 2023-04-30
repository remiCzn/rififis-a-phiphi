import { stateStore, type GameState } from './store'
import type { Message } from './ws-message'

export default class WebsocketClient {
  constructor() {
    this.connection = new WebSocket('ws://localhost:8080')
    this.connection.onmessage = (event: MessageEvent<string>) => {
      console.log(event.data)
      const msg: GameState = JSON.parse(event.data)
      stateStore.gameState = msg
      console.log(stateStore.gameState.players.size)
    }

    this.connection.onclose = (e) => {
      console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
      setTimeout(() => {
        this.connection = new WebSocket('ws://localhost:8080')
      }, 1000)
    }
  }

  private connection: WebSocket

  public sendMessage(message: Message) {
    this.connection.send(JSON.stringify(message))
  }
}
