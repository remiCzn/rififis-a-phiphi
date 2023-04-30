<script setup lang="ts">
import { stateStore } from '@/lib-ws/store'
</script>

<template>
  <div class="main">
    <h2 class="title">Connected players:</h2>
    <ul>
      <li v-for="[key,value] in stateStore.gameState.players" v-bind:key="key">{{ value.name }}</li>
    </ul>
    <router-link :to="{name: 'game'}">
      <button class="launch" :disabled="!stateStore.joined || stateStore.gameState.players.size <= 0">
        Launch game
      </button>
    </router-link>
    
  </div>
</template>

<style scoped lang="scss">
$pd: 15pt;

.main {
  height: 100%;
  width: 100%;
  padding: $pd;
}

.title {
  padding-bottom: $pd;
}

.launch {
  margin-top: $pd;
}
</style>
