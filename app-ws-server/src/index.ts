import ws from "ws";
import { Client } from "./client";
import { Message, MessageType, parseMessage } from "./messages";

const wss = new ws.Server({ port: 8080 });

const users: Array<{ name: string }> = [];

let clients: Array<Client> = [];

function broadcast(message: Message) {
  clients.forEach((client) => {
    client.sendMessage(message);
  });
}

// Creating connection using websocket
wss.on("connection", (socket) => {
  let client = new Client(socket);
  console.log(`new client connected ${client.uuid}`);
  clients.push(client);

  client.sendMessage({ type: MessageType.Users, value: users });

  //on message from client
  socket.on("message", (data) => {
    const message = parseMessage(data.toString());
    console.log(data.toString());
    switch (message.type) {
      case MessageType.Connection:
        client.sendMessage({ value: users, type: MessageType.Users });
        users.push({ name: message.value.name });
        broadcast({
          value: { name: message.value.name },
          type: MessageType.NewUser,
        });
        break;
    }
  });

  // handling what to do when clients disconnects from server
  socket.on("close", () => {
    console.log("the client has disconnected");
    clients = clients.filter((v) => v.uuid !== client.uuid);
  });
  // handling client connection error
  socket.onerror = function () {
    console.log("Some Error occurred");
  };
});
console.log("The WebSocket server is running on port 8080");
