import { createServer } from "http";
import { Server } from "socket.io";
import { GameState } from "./game";
import { Player } from "./player";
import { ClientToServerMessages, ServerToClientMessages } from "common";

const httpserver = createServer();
const io = new Server<ClientToServerMessages, ServerToClientMessages>(
  httpserver,
  {
    cors: {
      origin: "*",
    },
  }
);

const gameState = new GameState();
io.on("connection", (socket) => {
  socket.emit("userList", gameState.players.getList());
  socket.emit("joined", gameState.players.isPlayerJoined(socket.id));

  socket.on("join", (username) => {
    gameState.players.addPlayer(socket.id, username);
    io.emit("userList", gameState.players.getList());
    socket.emit("joined", gameState.players.isPlayerJoined(socket.id));
  });

  socket.on("left", () => {
    gameState.players.removePlayer(socket.id);
    io.emit("userList", gameState.players.getList());
    socket.emit("joined", gameState.players.isPlayerJoined(socket.id));
  });

  socket.on("disconnect", () => {
    gameState.players.removePlayer(socket.id);
    io.emit("userList", gameState.players.getList());
  });
});

httpserver.listen(3000);
