import { reactive } from 'vue'
import WebsocketClient from './websocket'

export const stateStore = reactive(<
  {
    websocket: WebsocketClient
    joined: boolean
    userList: Array<{ name: string }>
  }
>{
  websocket: new WebsocketClient(),
  joined: false,
  userList: []
})
