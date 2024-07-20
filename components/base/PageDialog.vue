<template>
  <v-dialog :width>
    <base-card :loading>
      <div class="flex justify-between items-center mb-4">
        <div class="text-xl font-semibold">
          <slot name="title" />
        </div>

        <v-btn
          variant="text"
          icon="mdi-close"
          color="grey"
          @click="$emit('close')"
        ></v-btn>
      </div>

      <slot name="body" />
    </base-card>
  </v-dialog>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string;
    loading?: boolean;
  }>(),
  {
    width: '800',
  }
);
</script>
