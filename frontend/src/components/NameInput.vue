<script setup lang="ts">
import { ref } from "vue";
function connect() {
  // stateStore.websocket.sendMessage({ type: MessageType.LogIn, player_name: name })
  // stateStore.joined = true
}

let name = ref("")
</script>

<template class="template">
  <div class="flex flex-col">
    <input type="text" class="border border-slate-800 bg-slate-200 rounded-xl p-2" v-model="name"
      placeholder="Username" />
    <button v-on:click="connect()" class="btn-green">Join
      game</button>
  </div>
</template>

<style scoped lang="scss"></style>
