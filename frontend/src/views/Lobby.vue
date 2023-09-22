<script setup lang="ts">
import NameInput from "../components/NameInput.vue";
import PlayerList from "../components/PlayerList.vue";
</script>

<template>
  <main>
    <div class="col col1"><NameInput></NameInput></div>
    <div class="separator"></div>
    <div class="col col2"><PlayerList></PlayerList></div>
  </main>
</template>

<style scoped lang="scss">

main {
  height: 100vh;
  /* border: 1pt red solid; */
  align-items: center;
  @apply flex flex-row;
}

.separator {
  border: 1pt gray solid;
  height: 85%;
}

.col {
  width: 50%;
  height: 100%;
  /* border: green 1pt solid; */
  @apply flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 760px) {
  .col {
    width: 100%;
    height: auto;
  }

  .col1 {
    padding: 30pt;
  }

  main {
    @apply flex flex-col;
  }

  .separator {
    display: none;
  }
}
</style>