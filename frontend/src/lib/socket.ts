import { ClientToServerMessages, ServerToClientMessages } from "common";
import { defineStore } from "pinia";
import { Socket, io } from "socket.io-client";
import { ref } from "vue";

export const useSocketStore = defineStore("store", () => {
  const connected = ref(false);

  const socket: Socket<ServerToClientMessages, ClientToServerMessages> = io(
    "http://localhost:3000"
  );

  socket.on("connect", () => {
    console.log("connected");
    connected.value = true;
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
    connected.value = false;
  });

  const joinRoom = (username: string) => {
    socket.emit("join", username);
  };

  const leftRoom = () => {
    socket.emit("left");
  };

  const launchGame = () => {
    socket.emit("launchGame");
  };

  return {
    socket,
    connected,
    joinRoom,
    leftRoom,
    launchGame,
  };
});
