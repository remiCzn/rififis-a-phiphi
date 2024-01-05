<script setup lang="ts">
import { useSocketStore } from "../../lib/socket";
import { useUserStore } from "../../lib/users";

const users = useUserStore();
const socket = useSocketStore();
</script>
<template>
  <div
    class="all flex items-center justify-center absolute top-0 left-0 h-full w-full bg-slate-700 bg-opacity-60"
    v-if="!users.joined"
  >
    <div
      class="bg-slate-50 w-72 flex flex-col items-center justify-center rounded-lg border m-auto p-3 z-50 text-black"
    >
      <div v-if="users.users.filter((x) => !x.connected).length > 0">
        <h1 class="font-semibold text-xl">Join as</h1>
        <ul>
          <li v-for="user in users.users.filter((x) => !x.connected)">
            <button @click="socket.actions.reconnect(user.socketId)">
              {{ user.name }}
            </button>
          </li>
        </ul>
      </div>
      <div v-else>
        <h1 class="font-semibold text-xl">This game is full</h1>
      </div>

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
