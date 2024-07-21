<template>
  <div
    class="flex flex-col items-center justify-center gap-2 h-[150px] text-xl text-blue py-2 px-4"
  >
    <v-avatar color="blue" icon="mdi-loading" size="x-large" class="motion !text-white mb-2" />
    Loading {{ name }}!
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

<style scoped>
.motion {
    animation: wheel 1s infinite;
}

@keyframes wheel {
    from {
        rotate: 0deg
    } to {
        rotate: 360deg
    }
}

</style>