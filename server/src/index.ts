import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { GameState } from "./game";
import { Player } from "./player";
import { ClientToServerMessages, ServerToClientMessages } from "common";

type RififiServer = Server<ClientToServerMessages, ServerToClientMessages>;
type RififiSocket = Socket<ClientToServerMessages, ServerToClientMessages>;

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
  updateLobbyState(gameState, io, socket);

  socket.on("join", (username) => {
    if (gameState.getStatus() == "Lobby") {
      gameState.players.addPlayer(socket.id, username);
    }
    updateLobbyState(gameState, io, socket);
  });

  socket.on("left", () => {
    if (gameState.getStatus() == "Lobby") {
      gameState.players.removePlayer(socket.id);
    }
    updateLobbyState(gameState, io, socket);
  });

  socket.on("disconnect", () => {
    if (gameState.getStatus() == "Lobby") {
      gameState.players.removePlayer(socket.id);
    }
    updateLobbyState(gameState, io, socket);
  });

  socket.on("launchGame", (callbackError) => {
    if (
      gameState.getStatus() == "Lobby" &&
      gameState.players.getList().length >= 3 &&
      gameState.players.getList().length <= 12
    ) {
      gameState.launchGame();
    } else {
      callbackError("The number of players must be between 3 and 12.");
    }
    updateLobbyState(gameState, io, socket);
  });
});

function updateLobbyState(
  gameState: GameState,
  io: RififiServer,
  socket: RififiSocket
) {
  io.emit("userList", gameState.players.getList());
  socket.emit("joined", gameState.players.isPlayerJoined(socket.id));
  io.emit("gameStatus", gameState.getStatus());
  io.emit("foodUpdate", gameState.current_food);
  io.emit("waterUpdate", gameState.current_water);
  io.emit("woodUpdate", gameState.current_wood);
}

httpserver.listen(3000);
