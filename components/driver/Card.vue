<template>
  <div
    class="flex items-center p6 bg-amber-50 rounded-lg border-2 border-dashed border-amber relative"
  >
    <div class="flex flex-col justify-between items-center gap-4">
      <div>
        <div class="text-amber font-semibold text-2xl">
          {{ driver.name }}
        </div>
        <div class="text-gray-400 text-base">
          {{ driver.email }}
        </div>

        <div class="flex items-center gap-2 font-medium text-amber mt-4">
          <v-icon>mdi-phone</v-icon>
          <div>{{ driver.phone }}</div>
        </div>
      </div>

      <v-icon class="bg-icon">mdi-moped</v-icon>
    </div>

    <v-btn
      v-if="editable"
      class="!absolute top-2 right-2 z-50"
      color="amber"
      variant="text"
      icon="mdi-pencil"
      :to="`/drivers/${driver.id}`"
    ></v-btn>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  driver: Driver;
  editable?: boolean;
}>();
</script>

<style scoped>
.bg-icon {
  position: absolute;
  right: 1rem;
  top: 0.75rem;
  font-size: 7rem;
  z-index: 1;
  color: #ffc10722;
}
</style>
