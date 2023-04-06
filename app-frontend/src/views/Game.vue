<script setup lang="ts">
    import ActionsButtonsVue from '@/components/ActionsButtons.vue'
    import RessourcesStatesVue from '@/components/RessourcesStates.vue'
</script>

<template>
  <main>
    <div class="line line1">
        <RessourcesStatesVue></RessourcesStatesVue>
    </div>
    <div class="line line2">
        <ActionsButtonsVue></ActionsButtonsVue>
    </div>
    <div class="line3">
        <router-link :to="{name: 'lobby'}">
            <button>Back to lobby</button>
        </router-link>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';

main {
  height: 100vh;
  /* border: 1pt red solid; */
  @include flex-column;
}



.line {
  width: 100%;
  height: 40%;
  /* border: green 1pt solid; */
  @include flex;
  justify-content: center;
  align-items: center;
}

.line3{
    width: 100%;
    height: 10%;
    /* border: green 1pt solid; */
    @include flex;
    justify-content: center;
    align-items: center;
}
.etat {
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @include flex-column;
}

.action {
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @include flex-column;
}

@media (max-width: 760px) {
  .line {
    height: 100%;
    width: auto;
  }

  .line1 {
    padding: 30pt;
  }

  main {
    @include flex-column;
  }

  .separator_h {
    display: none;
  }
}
</style>