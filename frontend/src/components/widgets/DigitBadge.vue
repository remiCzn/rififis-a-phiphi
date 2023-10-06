<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>
<template>
  <div
    class="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center"
  >
    <span class="text-blue-50">{{ value }}</span>
  </div>
</template>
