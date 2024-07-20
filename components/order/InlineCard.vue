<template>
  <div
    class="flex items-center p-6 bg-teal-50 rounded-lg border-2 border-dashed border-teal relative"
  >
    <div class="flex justify-between items-center w-full">
      <div class="text-teal font-semibold text-2xl">ID: #1</div>

      <v-chip class="text-teal"> Address </v-chip>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  order?: Order;
}>();
</script>

<style scoped>
.bg-icon {
  position: absolute;
  right: 2rem;
  top: 0.25rem;
  font-size: 4rem;
  z-index: 1;
  color: #ffc10722;
}
</style>
