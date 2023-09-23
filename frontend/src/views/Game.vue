<script setup lang="ts">
import ActionsButtons from "../components/ActionsButtons.vue";
import RessourcesStates from "../components/RessourcesStates.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="line line1">
      <RessourcesStates></RessourcesStates>
    </div>
    <div class="line line2">
      <ActionsButtons></ActionsButtons>
    </div>
    <div class="line3">
      <router-link :to="{name: 'lobby'}">
        <button>Back to lobby</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>


.line {
  width: 100%;
  height: 40%;
  /* border: green 1pt solid; */
  @apply flex;
  justify-content: center;
  align-items: center;
}

.line3 {
  width: 100%;
  height: 10%;
  @apply flex;
  justify-content: center;
  align-items: center;
}

.etat {
  width: 33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @apply flex flex-col;
}

.action {
  width: 33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @apply flex flex-col;
}

@media (max-width: 760px) {
  .line {
    height: 100%;
    width: auto;
  }

  .line1 {
    padding: 30pt;
  }

  .separator_h {
    display: none;
  }
}
</style>