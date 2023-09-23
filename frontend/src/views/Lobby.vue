<script setup lang="ts">
import NameInput from "../components/NameInput.vue";
import PlayerList from "../components/PlayerList.vue";
</script>

<template>
  <div class="border w-full h-full flex flex-col md:flex-row items-center bg-slate-100 border-slate-900 rounded-lg">
    <div class="col p-5 md:p-0">
      <NameInput></NameInput>
    </div>
    <div class="hidden md:block md:border md:border-gray-400 md:h-5/6"></div>
    <div class="col">
      <PlayerList></PlayerList>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col {
  @apply md:w-1/2 md:h-full w-full h-auto flex justify-center items-center;

}
</style>