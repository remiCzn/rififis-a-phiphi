import { defineStore } from "pinia";
import { ref } from "vue";
import { useSocketStore } from "./socket";

export const useRessourcesStore = defineStore("ressources", () => {
  const food = ref(0);
  const water = ref(0);
  const wood = ref(0);

  const socketStore = useSocketStore();
  socketStore.socket.on("foodUpdate", (value) => {
    food.value = value;
  });

  socketStore.socket.on("waterUpdate", (value) => {
    water.value = value;
  });

  socketStore.socket.on("woodUpdate", (value) => {
    wood.value = value;
  });

  return {
    food,
    water,
    wood,
  };
});
