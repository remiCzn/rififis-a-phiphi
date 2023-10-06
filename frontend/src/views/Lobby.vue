<script setup lang="ts">
import NameInput from "../components/LobbyNameInput.vue";
import PlayerList from "../components/LobbyPlayerList.vue";
import ConnectionLostModal from "../components/modals/ConnectionLostModal.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col md:p-16">
    <div
      class="pt-8 md:pt-0 md:border w-full h-full flex flex-col md:flex-row items-center bg-slate-100 md:border-slate-900 md:rounded-lg"
    >
      <div class="col p-5 md:p-0">
        <NameInput></NameInput>
      </div>
      <div class="hidden md:block md:border md:border-gray-400 md:h-5/6"></div>
      <div class="col">
        <PlayerList></PlayerList>
      </div>
    </div>
  </div>

  <ConnectionLostModal />
</template>

<style scoped lang="scss">
.col {
  @apply md:w-1/2 md:h-full w-full h-auto flex justify-center items-center;
}
</style>
