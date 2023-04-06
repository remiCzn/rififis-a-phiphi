<script setup lang="ts">
import NameInputVue from '@/components/NameInput.vue'
import PlayerListVue from '@/components/PlayerList.vue'
</script>

<template>
  <main>
    <div class="col col1"><NameInputVue></NameInputVue></div>
    <div class="separator"></div>
    <div class="col col2"><PlayerListVue></PlayerListVue></div>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';

main {
  height: 100vh;
  /* border: 1pt red solid; */
  align-items: center;
  @include flex-row;
}

.separator {
  border: 1pt gray solid;
  height: 85%;
}

.col {
  width: 50%;
  height: 100%;
  /* border: green 1pt solid; */
  @include flex;
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
    @include flex-column;
  }

  .separator {
    display: none;
  }
}
</style>