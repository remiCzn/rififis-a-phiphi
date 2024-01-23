<script setup lang="ts">
import { ref } from "vue";
import { useSocketStore } from "../lib/socket";
import { useUserStore } from "../lib/users";

const socketStore = useSocketStore();
const userStore = useUserStore();

let name = ref("");
</script>

<template class="template">
  <div class="flex flex-col">
    <input
      type="text"
      class="border border-slate-800 bg-slate-200 rounded-xl p-2"
      v-model="name"
      placeholder="Username"
    />
    <button
      v-on:click="socketStore.actions.joinRoom(name)"
      class="mt-3 btn-green"
    >
      {{ userStore.joined ? "Change username" : "Join room" }}
    </button>
    <button
      @click="socketStore.actions.leftRoom()"
      class="mt-2 btn-red"
      :disabled="!userStore.joined"
    >
      Left room
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
