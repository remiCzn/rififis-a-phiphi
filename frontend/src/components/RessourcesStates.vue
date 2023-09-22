<script setup lang="ts">
// import { stateStore } from '@/lib-ws/store'
</script>

<template>
    <div class="etat">
        <h1>Etat Nourriture</h1>
        <h2>0</h2>
    </div>
    <div class="etat">
        <h1>Etat Eau</h1>
        <h2>0</h2>
    </div>
    <div class="etat">
        <h1>Radeaux</h1>
        <h2>3</h2>
        <h3>2</h3>
    </div>
</template>


<style scoped lang="scss">

.etat {
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @apply flex flex-col
}
</style>