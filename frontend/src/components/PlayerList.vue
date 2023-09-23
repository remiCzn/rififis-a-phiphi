<script setup lang="ts">
import { useUserStore } from "../lib/users";
const userStore = useUserStore();
</script>
<template>
  <div class="h-full w-full p-10 flex flex-col">
    <h2 class="pb-2">Connected players:</h2>
    <ul role="list" class="divide-y divide-gray-100">
      <li
        class="flex min-w-0 gap-x-4 m-1"
        v-for="(value, i) in userStore.users"
        v-bind:key="value.username"
      >
        <img
          :src="`../../assets/profiles/${(i % 5) + 1}.jpeg`"
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
    <router-link :to="{ name: 'game' }" class="mt-auto">
      <button
        class="btn-green p-3"
        :disabled="userStore.users.length <= 0 || !userStore.joined"
      >
        Launch game
      </button>
    </router-link>
  </div>
</template>

<style scoped lang="scss"></style>
