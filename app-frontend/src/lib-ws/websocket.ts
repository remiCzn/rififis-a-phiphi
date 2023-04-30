import { stateStore, type GameState, type Player } from './store'
import type { Message } from './ws-message'

export default class WebsocketClient {
  constructor() {
    this.connection = new WebSocket('ws://localhost:1234/ws')
    this.connection.onmessage = (event: MessageEvent<string>) => {
      console.log(event.data)
      const res = JSON.parse(event.data);
      let msg: GameState = res;
      let map = new Map<number, Player>();
      for (var value in msg.players) {
        map.set(parseInt(value), msg.players[value]);
      }
      msg.players = map
      stateStore.gameState = msg
    }

    this.connection.onclose = (e) => {
      console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
      setTimeout(() => {
        this.connection = new WebSocket('ws://localhost:1234/ws')
      }, 1000)
    }
  }

  private connection: WebSocket

  public sendMessage(message: Message) {
    this.connection.send(JSON.stringify(message))
  }
}
