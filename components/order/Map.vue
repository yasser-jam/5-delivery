<template>
  <div
  v-if="isDone"
    class="flex items-center justify-center h-[300px] border-2 border-dashed border-teal text-xl text-teal bg-teal-50 py-2 px-4"
  >
    <v-icon color="teal">mdi-check</v-icon>
    Order Deliverd
  </div>

  <div v-else id="map" class="h-[300px] w-full"></div>

  <div></div>
</template>

<script setup lang="ts">
defineProps<{
  isDone: boolean;
}>();
</script>
