<script setup lang="ts">
import { useSocketStore } from "../../lib/socket";
const socketStore = useSocketStore();
</script>
<template>
  <div
    class="all flex items-center justify-center absolute top-0 left-0 h-full w-full bg-slate-700 bg-opacity-60"
    v-if="!socketStore.connected"
  >
    <div
      class="bg-slate-50 w-72 flex flex-col items-center justify-center rounded-lg border m-auto p-3 z-50 text-black"
    >
      <h1 class="font-semibold text-xl">Connection Lost</h1>
      <router-link :to="{ name: 'main' }">
        <button class="btn-green m-3">Back to main menu</button>
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
