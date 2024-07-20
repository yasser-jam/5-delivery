<template>
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
        <slot />
      </v-card-text>
    </v-card>
        
    
</template>

<script setup lang=ts>
defineProps<{
    loading?: boolean
}>()
</script>