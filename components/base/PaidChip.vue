<template>
    <v-chip :color="paid ? 'success' : 'warning'">
        {{ paid ? 'Paid' : 'Not Paid' }}
    </v-chip>
</template>

<script setup lang="ts">
defineProps<{
    paid: 0 | 1
}>()
</script>