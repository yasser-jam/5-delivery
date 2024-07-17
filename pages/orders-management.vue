<template>
  <v-container>
    <div class="my-4">
      <h1 class="text-3xl font-semibold text-secondary mb-2">
        Orders Management
      </h1>

      <div class="text-gray-500 text-sm">
        Assign Active Driver to Finished Order
      </div>
    </div>

    <v-row>
      <v-col cols="6">
        <div class="!shadow-sm bg-gray-50 rounded-lg p-4">
          <div
            class="flex gap-2 items-center text-secondary text-xl font-medium mb-4"
          >
            <v-icon>mdi-moped</v-icon>

            <div>Available Drivers</div>
          </div>

          <div class="max-h-[300px] overflow-auto">
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="!shadow-sm bg-gray-100 rounded-lg p-4">
          <div
            class="flex gap-2 items-center text-secondary text-xl font-medium mb-4"
          >
            <v-icon>mdi-car-pickup</v-icon>

            <div>Available Orders</div>
          </div>

          <div class="max-h-[300px] overflow-auto">
            <order-card class="mb-2"></order-card>
            <order-card class="mb-2"></order-card>
            <order-card class="mb-2"></order-card>
            <order-card class="mb-2"></order-card>
            <order-card class="mb-2"></order-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <dialog-confirm-order v-model="confirmDialog" />
</template>

<script setup lang="ts">
const confirmDialog = ref(false);
</script>
