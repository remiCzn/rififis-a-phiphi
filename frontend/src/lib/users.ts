import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useSocketStore } from "./socket";
import { PlayerState } from "common/gameStatus";

export const useUserStore = defineStore("user", () => {
  const users: Ref<Array<PlayerState>> = ref([]);
  const joined: Ref<boolean> = ref(false);

  const socketStore = useSocketStore();

  socketStore.socket.on("userList", (list) => {
    users.value = list;
  });

  socketStore.socket.on("joined", (hasJoined) => {
    joined.value = hasJoined;
  });

  const currentPlayer = () => {
    return users.value.find((x) => x.socketId == socketStore.socket.id);
  };

  return {
    users,
    joined,
    currentPlayer,
  };
});
