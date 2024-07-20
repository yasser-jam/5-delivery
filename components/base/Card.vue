<template>
    <v-card :loading :disabled="loading">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          :color
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
withDefaults(defineProps<{
    loading?: boolean
    color?: 'primary' | 'success' | 'blue'
}>(), {
  color: 'primary'
})
</script>