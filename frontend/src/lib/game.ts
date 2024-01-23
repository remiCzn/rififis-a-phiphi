import { GameStatus } from "common/gameStatus";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useSocketStore } from "./socket";
import { useRouter } from "vue-router";

export const useGameStore = defineStore("game", () => {
  const status: Ref<GameStatus> = ref("Lobby");

  const router = useRouter();

  const socketStore = useSocketStore();
  socketStore.socket.on("gameStatus", (newStatus) => {
    status.value = newStatus;
    if (newStatus == "Launched") {
      router.push({ name: "game" });
    }
  });

  return {
    status,
  };
});
