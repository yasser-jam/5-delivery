<template>
  <div
    class="flex items-center p-6 bg-amber-50 rounded-lg border-2 border-dashed border-amber relative"
  >

    <div class="flex flex-col gap-4">
      <div>
        <div class="text-amber font-semibold text-2xl">
          {{ driver.name }}
        </div>
      </div>
    </div>
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
  font-size: 4rem;
  z-index: 1;
  color: #ffc10722;
}
</style>
