<template>
    <v-chip :color="status ? 'success' : 'error'">
        {{ status ? 'Active' : 'Deactive' }}
    </v-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
    status: boolean
}>()
</script>