<script setup lang="ts">

function connect() {
  // stateStore.websocket.sendMessage({ type: MessageType.LogIn, player_name: name })
  // stateStore.joined = true
}

let name: string = ''
</script>

<template class="template">
  <div class="main">
<!--    <input type="text" v-model="name" placeholder="Username" :disabled="stateStore.joined" />-->
<!--    <button v-on:click="connect()" :disabled="stateStore.joined">Join game</button>-->
  </div>
</template>

<style scoped lang="scss">

.main {
  @apply flex flex-col
}
</style>
