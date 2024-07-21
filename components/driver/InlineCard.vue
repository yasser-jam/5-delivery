<template>
  <div
    class="flex items-center justify-between p-6 bg-amber-50 rounded-lg border-2 border-dashed border-amber relative"
  >
    <div class="text-amber font-semibold text-2xl">
      {{ driver.name }}
    </div>

    <div class="flex gap-4">
      <v-chip v-if="pending">Pending</v-chip>
      <v-chip v-if="onWay">On-Way</v-chip>
    </div>

    <v-icon size="2rem" color="amber" class="handle cursor-pointer">mdi-drag</v-icon>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  driver: Driver;
  pending?: boolean
  onWay?: boolean
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
