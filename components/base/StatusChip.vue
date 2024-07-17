<template>
    <v-chip :color="status == 'Active' ? 'success' : 'error'">
        {{ status == 'Active' ? 'Active' : 'Inactive' }}
    </v-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
    status: 'Inactive' | 'Active'
}>()
</script>