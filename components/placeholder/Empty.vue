<template>
  <div
    class="flex flex-col items-center justify-center gap-2 h-[150px] border-2 border-dashed border-amber text-xl text-amber bg-amber-50 py-2 px-4"
  >
    <v-avatar color="amber" icon="mdi-help" size="x-large" class="mb-2" />
    There isn't any {{ name }}!
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    name: string
}>(), {
    name: 'Item'
})
</script>