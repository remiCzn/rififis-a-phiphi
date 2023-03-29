import { stateStore } from './store'
import { MessageType, type Message } from './ws-message'

export default class WebsocketClient {
  constructor() {
    this.connection = new WebSocket('ws://localhost:8080')
    this.connection.onmessage = (event: MessageEvent<string>) => {
      console.log(event.data)
      const msg: Message = JSON.parse(event.data)
      switch (msg.type) {
        case MessageType.Users:
          console.log(msg)
          stateStore.userList = msg.value
          break
        case MessageType.NewUser:
          console.log(msg)
          stateStore.userList.push(msg.value)
          break
      }
      console.log(stateStore.userList.length)
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
