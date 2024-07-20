<template>
  <div
    class="flex items-center justify-between p-6 bg-amber-50 rounded-lg border-2 border-dashed border-amber relative"
  >
    <!-- <v-icon class="bg-icon">mdi-moped</v-icon> -->

    <div class="text-amber font-semibold text-2xl">
      {{ driver.name }}
    </div>

    <v-icon size="2rem" color="amber" class="cursor-pointer">mdi-drag</v-icon>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  driver: Driver;
}>();
</script>

<style scoped>
.bg-icon {
  position: absolute;
  right: 2rem;
  top: 0.25rem;
  font-size: 5rem;
  z-index: 1;
  color: #ffc10722;
}
</style>
