<script setup lang="ts">
import { stateStore } from '@/lib-ws/store'
</script>

<template>
  <div class="main">
    <h2 class="title">Connected players:</h2>
    <ul>
      <li v-for="user in stateStore.userList" v-bind:key="user.name">{{ user.name }}</li>
    </ul>
    <button class="launch" :disabled="!stateStore.joined">Launch game</button>
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
