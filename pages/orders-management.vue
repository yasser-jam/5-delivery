<template>
  <v-container>
    <base-title-section
      title="Orders Management"
      subtitle="Assign Active Driver to Finished Order"
    />

    <v-row>
      <v-col cols="6">
        <div class="!shadow-sm bg-gray-50 rounded-lg p-4">
          <div
            class="flex gap-2 items-center text-amber text-xl font-medium mb-4"
          >
            <v-icon>mdi-moped</v-icon>

            <div>Available Drivers</div>
          </div>

          <div class="h-[300px] overflow-auto">
            <driver-inline-card class="mb-2"></driver-inline-card>
            <!-- <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card>
            <driver-card class="mb-2"></driver-card> -->
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="!shadow-sm bg-gray-50 rounded-lg p-4">
          <div
            class="flex gap-2 items-center text-teal text-xl font-medium mb-4"
          >
            <v-icon>mdi-package</v-icon>

            <div>Available Orders</div>
          </div>

          <div class="h-[300px] overflow-auto">
            <order-inline-card class="mb-2"></order-inline-card>
            <order-inline-card class="mb-2"></order-inline-card>
            <order-inline-card class="mb-2"></order-inline-card>
            <order-inline-card class="mb-2"></order-inline-card>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <div class="!shadow-sm bg-gray-100 rounded-lg p-4">
          <div
            class="flex gap-2 items-center text-secondary text-xl font-medium mb-4"
          >
            <v-icon>mdi-package</v-icon>

            <div>In Progress Orders</div>
          </div>

          <div class="h-[300px] overflow-auto">
            <order-deliver-card class="mb-2"></order-deliver-card>
            <order-deliver-card class="mb-2"></order-deliver-card>
            <order-deliver-card class="mb-2"></order-deliver-card>
            <order-deliver-card class="mb-2"></order-deliver-card>
            <order-deliver-card class="mb-2"></order-deliver-card>
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
