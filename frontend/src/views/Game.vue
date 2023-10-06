<script setup lang="ts">
import ConnectionLostModal from "../components/modals/ConnectionLostModal.vue";
import NotStartedGameModal from "../components/modals/NotStartedGameModal.vue";
import { useRessourcesStore } from "../lib/ressources";
import DigitBadge from "../components/widgets/DigitBadge.vue";
const ressources = useRessourcesStore();

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
  <div class="w-full h-full flex flex-col">
    <div class="flex flex-col items-start">
      <div class="etat">
        <DigitBadge :value="ressources.food" />
        <span class="px-3">Nourriture</span>
      </div>
      <div class="etat">
        <DigitBadge :value="ressources.water" />
        <span class="px-3">Eau</span>
      </div>
      <div class="etat">
        <DigitBadge :value="Math.floor(ressources.wood / 6)" />
        <span class="ps-3">Radeaux</span>
        <span class="ps-3">{{ `(${ressources.wood % 6}/6)` }}</span>
      </div>
    </div>

    <div
      class="h-full w-auto flex items-center justify-evenly border-red-500 border"
    >
      <button class="btn-emerald" v-on:click="foodAction()">
        Chercher nourriture
      </button>
      <button class="btn-emerald" v-on:click="waterAction()">
        Chercher eau
      </button>
      <button class="btn-emerald" v-on:click="woodAction()">
        Chercher bois
      </button>
    </div>

    <!-- <div
      class="w-full h-16 flex justify-center items-center border border-yellow-500"
    >
      <router-link :to="{ name: 'lobby' }">
        <button>Back to lobby</button>
      </router-link>
    </div> -->
  </div>
  <ConnectionLostModal />
  <NotStartedGameModal />
</template>

<style scoped lang="scss">
.etat {
  @apply flex flex-row w-full h-full justify-start items-center p-1;
}

.line {
  @apply h-full w-auto md:w-full md:h-2/5 justify-center items-center flex;
}
</style>
