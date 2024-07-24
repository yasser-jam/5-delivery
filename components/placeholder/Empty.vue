<template>
  <div
    class="flex flex-col items-center justify-center gap-2 min-h-[150px] border-2 border-dashed border-amber text-xl text-amber bg-amber-50 py-2 px-4 rounded-lg"
  >
    <v-avatar
      color="amber"
      icon="mdi-help"
      size="x-large"
      class="text-white mb-2"
    />
    <slot> There isn't any {{ name }}! </slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
  }>(),
  {
    name: 'Item',
  }
);
</script>
