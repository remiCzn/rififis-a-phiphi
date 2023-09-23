<script setup lang="ts">
// import { stateStore } from '@/lib-ws/store'
</script>

<template>
  <div class="h-full w-full p-2">
    <h2 class="pb-2">Connected players:</h2>
    <ul>
      <!--      <li v-for="value in stateStore.gameState.players.values()" v-bind:key="value.name">{{ value.name }}</li>-->
    </ul>
    <router-link :to="{ name: 'game' }">
      <button class="btn-green p-3">Launch game</button>
      <!--      <button class="launch" :disabled="!stateStore.joined || stateStore.gameState.players.size <= 0">-->
      <!--        Launch game-->
      <!--      </button>-->
    </router-link>

  </div>
</template>

<style scoped lang="scss"></style>
