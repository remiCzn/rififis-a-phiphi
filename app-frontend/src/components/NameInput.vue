<script setup lang="ts">
import { stateStore } from '@/lib-ws/store'
import { MessageType } from '@/lib-ws/ws-message'

function connect() {
  stateStore.websocket.sendMessage({ type: MessageType.LogIn, playerName: name })
  stateStore.joined = true
}

let name: string = ''
</script>

<template class="template">
  <div class="main">
    <input type="text" v-model="name" placeholder="Username" :disabled="stateStore.joined" />
    <button v-on:click="connect()" :disabled="stateStore.joined">Join game</button>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/base.scss';
.main {
  @include flex-column;
}
</style>
