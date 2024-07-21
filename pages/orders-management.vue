<template>
  <v-container>
    <base-title-section
      title="Orders Management"
      subtitle="Assign Active Driver to Finished Order"
    />

    <v-row>
      <v-col cols="6">
        <base-card
          :loading="driversLoading"
          class="!shadow-sm !bg-gray-50 rounded-lg"
        >
          <div
            class="flex gap-2 items-center text-amber text-xl font-medium mb-4"
          >
            <v-icon>mdi-moped</v-icon>

            <div>Available Drivers</div>
          </div>

          <div class="h-[300px] overflow-auto">
            <draggable
              :list="drivers"
              @start="(el) => (selectedDriver = drivers[el.oldIndex])"
              handle=".handle"
              key="id"
              class="list-group"
              ghost-class="ghost"
            >
              <template #item="{ element }">
                <driver-inline-card
                  :driver="element"
                  :on-way="isDriverOnWay(element.id)"
                  :pending="isDriverPending(element.id)"
                  class="mb-2"
                ></driver-inline-card>
              </template>
            </draggable>
          </div>
        </base-card>
      </v-col>

      <v-col cols="6">
        <base-card
          :loading="ordersLoading"
          color="success"
          class="!shadow-sm !bg-gray-50 rounded-lg p-4"
        >
          <div
            class="flex gap-2 items-center text-teal text-xl font-medium mb-4"
          >
            <v-icon>mdi-package</v-icon>

            <div>Available Orders</div>
          </div>

          <div class="h-[300px] overflow-auto">
            <template v-for="order in readyOrders">
              <nuxt-link :to="`/orders/${order.id}`" class="decoration-none">
                <order-inline-card :order class="mb-2" @drop="assignDriver" />
              </nuxt-link>
            </template>
          </div>
        </base-card>
      </v-col>

      <v-col cols="12">
        <base-card
          :loading="assignOrdersLoading"
          color="blue"
          class="!shadow-sm !bg-gray-50 rounded-lg p-4"
        >
          <div
            class="flex gap-2 items-center text-blue text-xl font-medium mb-4"
          >
            <v-icon>mdi-package</v-icon>

            <div>Assigned Orders</div>
          </div>

          <placeholder-empty v-if="!assignedOrders.length" name="Assigned Orders" />

          <div v-else class="max-h-[300px]  flow-auto">
            <order-deliver-card
              v-for="order in assignedOrders"
              :order
              :driver="drivers.find(driver => driver.id == order.delivery_worker_id as any) as Driver"
              status="pending"
              class="mb-2"
            ></order-deliver-card>
          </div>
        </base-card>
      </v-col>

      <v-col cols="12">
        <base-card
          :loading="activeOrdersLoading"
          class="!shadow-sm !bg-gray-50 rounded-lg p-4"
        >
          <div
            class="flex gap-2 items-center text-primary text-xl font-medium mb-4"
          >
            <v-icon>mdi-moped-electric</v-icon>

            <div>Under Delivery Orders</div>
          </div>

          <placeholder-empty v-if="!activeOrders.length" name="Under Delivery Orders" />
          
          <div v-else class="max-h-[300px] overflow-auto">
            <order-deliver-card
              v-for="order in activeOrders"
              :driver="drivers.find(driver => driver.id == order.delivery_worker_id as any) as Driver"
              :order
              status="in_progress"
              class="mb-2"
            ></order-deliver-card>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>

  <dialog-confirm-order
    v-model="confirmDialog"
    :driver="selectedDriver"
    :order="selectedOrder"
  />
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';

const driverStore = useDriverStore();
const orderStore = useOrderStore();

const { orders, activeOrders, assignedOrders } = storeToRefs(orderStore);
const { drivers } = storeToRefs(driverStore);

const selectedDriver = ref<Driver>({} as Driver);
const selectedOrder = ref<Order>({} as Order);

const confirmDialog = ref(false);

const { pending: driversLoading } = useLazyAsyncData(() =>
  driverStore.listActive()
);
const { pending: ordersLoading } = useLazyAsyncData(() => orderStore.list());
const { pending: activeOrdersLoading } = useLazyAsyncData(() =>
  orderStore.listUnderDelivery()
);

const { pending: assignOrdersLoading } = useLazyAsyncData(() =>
  orderStore.listAssigned()
);

// check if the driver on way to deliver order
const isDriverOnWay = (driverId: number) =>
  activeOrders.value.findIndex(
    (order) => Number(order.delivery_worker_id) == driverId
  ) > -1;

// check if the driver pending to confirm order
const isDriverPending = (driverId: number) =>
  assignedOrders.value.findIndex(
    (order) => Number(order.delivery_worker_id) == driverId
  ) > -1;

const readyOrders = computed(() =>
  orders.value?.filter((order) => order.status == 'Ready')
);

const assignDriver = async (order: Order) => {
  // select order
  selectedOrder.value = order;

  // open dialog
  confirmDialog.value = true;
};
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
