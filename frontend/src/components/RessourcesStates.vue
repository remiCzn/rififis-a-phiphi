<script setup lang="ts">
import { useRessourcesStore } from '../lib/ressources';

const ressources = useRessourcesStore()
</script>

<template>
    <div class="etat">
        <h1>Etat Nourriture</h1>
        <h2>{{ ressources.food }}</h2>
    </div>
    <div class="etat">
        <h1>Etat Eau</h1>
        <h2>{{ ressources.water }}</h2>
    </div>
    <div class="etat">
        <h1>Etat radeaux {{ ressources.wood }}</h1>
        <h2>{{ Math.floor(ressources.wood / 6) }} radeaux</h2>
        <h3>{{ ressources.wood % 6 }} bois</h3>
    </div>
</template>


<style scoped lang="scss">

.etat {
    @apply flex flex-col w-1/3 h-full justify-center items-center
}
</style>