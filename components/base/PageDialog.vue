<template>
  <v-dialog :width>
    <v-card>
      <v-card-text>
        <div class="flex justify-between items-center mb-4">
          <div class="text-xl font-semibold">
            <slot name="title" />
          </div>

          <v-btn variant="text" icon="mdi-close" color="grey" @click="$emit('close')"></v-btn>
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
  }>(),
  {
    width: '800',
  }
);
</script>
