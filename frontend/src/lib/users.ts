import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useSocketStore } from "./socket";

export const useUserStore = defineStore("user", () => {
  const users: Ref<Array<{ username: string }>> = ref([]);
  const joined: Ref<boolean> = ref(false);

  const socketStore = useSocketStore();

  socketStore.socket.on("userList", (list) => {
    users.value = list.map((x) => ({ username: x }));
  });

  socketStore.socket.on("joined", (hasJoined) => {
    joined.value = hasJoined;
  });

  return {
    users,
    joined,
  };
});
