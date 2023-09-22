<script setup lang="ts">
// import { stateStore } from '@/lib-ws/store'
// import { MessageType } from '@/lib-ws/ws-message'

function foodAction() {
  // stateStore.websocket.sendMessage({ type: MessageType.FoodAction })
}

function waterAction() {
  // stateStore.websocket.sendMessage({ type: MessageType.WaterAction })
}

function woodAction() {
  // stateStore.websocket.sendMessage({ type: MessageType.WoodAction })
}
</script>

<template>
    <div class="action">
        <button v-on:click="foodAction()">Chercher nourriture</button>
    </div>
    <div class="action">
        <button v-on:click="waterAction()">Chercher eau</button>
    </div>
    <div class="action">
        <button v-on:click="woodAction()">Chercher bois</button>
    </div>
</template>


<style scoped lang="scss">
.action {
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @apply flex flex-col
}
</style>

