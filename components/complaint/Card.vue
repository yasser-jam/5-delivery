<template>
  <base-card
    class="flex flex-col items-center justify-center !shadow-sm p-4 !bg-gray-50 rounded-lg"
  >
    <div class="flex flex-col justify-center items-center gap-4">
      <v-avatar
        icon="mdi-information-variant"
        size="large"
        color="primary"
        class="text-white text-xl"
      ></v-avatar>

      <div class="text-sm text-center text-gray-500">
        {{ complaint.complaint }}
      </div>

      <v-chip color="primary" class="mt-2">Order: #{{ complaint.order_id }}</v-chip>
    </div>
  </base-card>
</template>

<script setup lang="ts">
defineProps<{
  complaint: Complaint
}>()
</script>