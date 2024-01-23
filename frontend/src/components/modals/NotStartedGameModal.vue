<script setup lang="ts">
import { useGameStore } from "../../lib/game";
const gameStore = useGameStore();
</script>
<template>
  <div
    class="all flex items-center justify-center absolute top-0 left-0 h-full w-full bg-slate-700 bg-opacity-60"
    v-if="gameStore.status != 'Launched'"
  >
    <div
      class="bg-slate-50 w-72 flex flex-col items-center justify-center rounded-lg border m-auto p-3 z-50 text-black"
    >
      <h1 class="font-semibold text-xl">This game is not started</h1>
      <router-link :to="{ name: 'lobby' }">
        <button class="btn-green m-3">Back to Lobby</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@keyframes modalLoad {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.all {
  animation: 0.3s ease-out 0s 1 modalLoad;
}
</style>
