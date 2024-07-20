<template>
  <v-container>
    <base-title-section
      title="Orders Management"
      subtitle="Assign Active Driver to Finished Order"
    />

    <v-row>
      <v-col cols="6">
        <base-card :loading="driversLoading" class="!shadow-sm !bg-gray-50 rounded-lg">
          <div
            class="flex gap-2 items-center text-amber text-xl font-medium mb-4"
          >
            <v-icon>mdi-moped</v-icon>

            <div>Available Drivers</div>
          </div>

          <div class="h-[300px] overflow-auto">
            <driver-inline-card v-for="driver in drivers" :driver class="mb-2"></driver-inline-card>
          </div>
        </base-card>
      </v-col>

      <v-col cols="6">
        <base-card :loading="ordersLoading" class="!shadow-sm !bg-gray-50 rounded-lg p-4">
          <div
            class="flex gap-2 items-center text-teal text-xl font-medium mb-4"
          >
            <v-icon>mdi-package</v-icon>

            <div>Available Orders</div>
          </div>

          <div class="h-[300px] overflow-auto">
            <template v-for="order in orders">
              <nuxt-link :to="`/orders/${order.id}`" class="decoration-none">
                <order-inline-card  :order class="mb-2"></order-inline-card>
              </nuxt-link>
            </template>
          </div>
        </base-card>
      </v-col>

      <v-col cols="12">
        <base-card :loading="activeOrdersLoading" class="!shadow-sm !bg-gray-50 rounded-lg p-4">
          <div
            class="flex gap-2 items-center text-blue text-xl font-medium mb-4"
          >
            <v-icon>mdi-package</v-icon>

            <div>In Progress Orders</div>
          </div>

          <div class="max-h-[300px] overflow-auto">
            <order-deliver-card class="mb-2"></order-deliver-card>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>

  <dialog-confirm-order v-model="confirmDialog" />
</template>

<script setup lang="ts">

const driverStore = useDriverStore()
const orderStore = useOrderStore()

const { pending: driversLoading } = useLazyAsyncData(() => driverStore.listActive())
const { pending: ordersLoading } = useLazyAsyncData(() => orderStore.list())
const { pending: activeOrdersLoading } = useLazyAsyncData(() => orderStore.listUnderDelivery())

const { orders, activeOrders } = storeToRefs(orderStore)
const { drivers } = storeToRefs(driverStore)

const confirmDialog = ref(false);

</script>
