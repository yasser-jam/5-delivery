<template>
  <v-dialog :width>
    <v-card :loading :disabled="loading">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="primary"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-text>
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
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string;
    loading?: boolean
  }>(),
  {
    width: '800',
  }
);
</script>
