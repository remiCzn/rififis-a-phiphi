import { v4 } from "uuid";
import { WebSocket } from "ws";
import { Message } from "./messages";

export class Client {
  private socket: WebSocket;
  public readonly uuid: string;

  constructor(socket: WebSocket) {
    this.socket = socket;
    this.uuid = v4();
  }

  sendMessage(message: Message) {
    const msg = JSON.stringify(message);
    console.log(`send to ${this.uuid}: ${msg}`);
    this.socket.send(msg);
  }
}
