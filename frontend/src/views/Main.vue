<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col font-bold text-xl justify-center items-center mt-6 p-16"
  >
    <h1>Bienvenue sur l'île Phi Phi</h1>
    <router-link :to="{ name: 'lobby' }">
      <button class="btn-green m-3">Join Lobby</button>
    </router-link>
    <img
      src="../../assets/island.jpeg"
      class="rounded w-24 sm:w-32 lg:w-56"
      alt="Image d'île abandonnée"
    />
  </div>
</template>

<style scoped lang="scss"></style>
