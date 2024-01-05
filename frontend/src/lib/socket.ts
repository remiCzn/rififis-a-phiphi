import { ClientToServerMessages, ServerToClientMessages } from "common";
import { defineStore } from "pinia";
import { Socket, io } from "socket.io-client";
import { ref } from "vue";
import { useUserStore } from "./users";

export const useSocketStore = defineStore("store", () => {
  const connected = ref(false);

  const socket: Socket<ServerToClientMessages, ClientToServerMessages> = io();

  socket.on("connect", () => {
    console.log("connected");
    connected.value = true;
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
    connected.value = false;
  });

  const actions = {
    joinRoom: (username: string) => {
      socket.emit("join", username);
    },
    reconnect: (socketid: string) => {
      socket.emit("reconnect", socketid, () => {
        useUserStore().joined = true;
      });
    },
    leftRoom: () => {
      socket.emit("left");
    },
    launchGame: () => {
      socket.emit("launchGame", (error) => {
        console.log(error);
      });
    },
  };

  return {
    socket,
    connected,
    actions,
  };
});
