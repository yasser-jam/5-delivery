<template>
  <v-dialog width="400" @click:outside="$emit('update:model-value', false)">
    <base-card :loading color="error" :disabled="loading">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="primary"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <div class="flex flex-col items-center justify-center gap-2">
        <v-avatar color="error" size="3rem" icon="mdi-trash-can"></v-avatar>
        <div class="text-xl font-semibold">Are You Sure?</div>

        <div class="text-lg text-gray-500 text-center mt-1">
          You're going to delete {{ item }}
        </div>
      </div>

      <div class="flex justify-center gap-2 mt-6">
        <v-btn
          variant="text"
          color="gray"
          @click="$emit('update:model-value', false)"
          >Close</v-btn
        >
        <v-btn color="error" :loading @click="$emit('remove')">Delete</v-btn>
      </div>
    </base-card>
  </v-dialog>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    item?: string;
    loading?: boolean
  }>(),
  {
    item: 'item',
  }
);
</script>
