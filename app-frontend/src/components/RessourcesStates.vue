<script setup lang="ts">
import { stateStore } from '@/lib-ws/store'
</script>

<template>
    <div class="etat">
        <h1>Etat Nourriture</h1>
        <h2>{{ stateStore.gameState.currentFood }}</h2>
    </div>
    <div class="etat">
        <h1>Etat Eau</h1>
        <h2>{{ stateStore.gameState.currentWater }}</h2>
    </div>
    <div class="etat">
        <h1>Radeaux</h1>
        <h2>{{ Math.floor(stateStore.gameState.currentWood / 6) }}</h2>
        <h3>{{ stateStore.gameState.currentWood % 6 }}</h3>
    </div>
</template>


<style scoped lang="scss">
@import '../assets/base.scss';

.etat {
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @include flex-column;
}
</style>