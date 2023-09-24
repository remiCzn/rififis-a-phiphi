<script setup lang="ts">
import { useUserStore } from "../lib/users";
import { useSocketStore } from "../lib/socket";
import { useGameStore } from "../lib/game";
import { profilePic } from "../lib/assets";

const userStore = useUserStore();
const socketStore = useSocketStore();
const gameStore = useGameStore();
</script>
<template>
  <div class="h-full w-full p-10 flex flex-col">
    <h2 class="pb-2">Status: {{ gameStore.status }} - Connected players:</h2>
    <ul role="list" class="divide-y divide-gray-100">
      <li
        class="flex min-w-0 gap-x-4 m-1"
        v-for="value in userStore.users"
        v-bind:key="value.username"
      >
        <img
          :src="profilePic()"
          class="h-12 w-12 flex-none rounded-full border"
          alt=""
        />
        <div class="min-w-0 flex items-center">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {{ value.username }}
          </p>
        </div>
      </li>
    </ul>
    <div class="mt-auto flex flex-col">
      <button
        class="btn-green p-3"
        :disabled="
          userStore.users.length < 3 ||
          userStore.users.length > 12 ||
          !userStore.joined
        "
        @click="socketStore.launchGame()"
      >
        Launch game
      </button>
      <p class="text-sm text-red-500" v-if="userStore.users.length < 3">
        3 joueurs minimum
      </p>
      <p class="text-sm text-red-500" v-if="userStore.users.length > 12">
        12 joueurs maximum
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
