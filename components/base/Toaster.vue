<template>
  <v-snackbar :timeout="4000" :color="status" variant="tonal" location="top right" >
    {{ msg }}

  </v-snackbar>
</template>

<script setup lang="ts">

defineProps<{
    status: 'success' | 'error'
    msg: string
}>()

</script>