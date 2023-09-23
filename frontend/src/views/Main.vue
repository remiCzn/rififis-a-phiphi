<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col font-bold text-xl justify-center items-center">
        <h1>Bienvenue sur l'île de Phi Phi</h1>
        <router-link :to="{ name: 'lobby' }">
            <button class="btn-green">Join Lobby</button>
        </router-link>
    </div>
</template>

<style scoped lang="scss"></style>