<template>
  <placeholder-loading v-if="pending" name="Order" class="my-4" />

  <v-container v-else>
    <div class="flex justify-between items-center mt-8 mb-2">
      <div>
        <div class="text-4xl text-primary font-semibold">
          Order #{{ order.id }}
          <span class="text-amber-300 text-xl"
            >({{ order.restaurant_name }})</span
          >
        </div>

        <div class="flex gap-2 items-center text-gray-500 mt-4">
          <div class="flex items-center gap-2">
            <v-icon>mdi-calendar</v-icon>
            <div>{{ dayjs(order.order_date).format('DD-MM-YYYY') }}</div>
          </div>

          <div>/</div>

          <div class="flex items-center gap-2">
            <v-icon>mdi-cash</v-icon>
            <div>{{ order.order_price }}S.P</div>
          </div>
        </div>
      </div>

      <v-chip
        size="large"
        :color="order.status == 'ready' ? 'blue' : 'done' ? 'green' : 'grey'"
        >{{ order.status }}</v-chip
      >
    </div>

    <v-row>
      <v-col cols="12" class="mb-2">
        <order-timeline
          :status="orderStatus"
        />
      </v-col>

      <v-col cols="12" md="6">
        <div class="text-xl font-medium text-gray-400 mb-2">
          Delivery Worker
        </div>

        <placeholder-empty v-if="!order.delivery_worker">
          No Assigned Driver
        </placeholder-empty>

        <driver-card v-else is-active :driver="order.delivery_worker" />
      </v-col>

      <v-col cols="12" md="6" class="mb-4">
        <div class="text-xl font-medium text-gray-400 mb-2">Customer</div>

        <user-card :user="order.user"></user-card>
      </v-col>

      <v-col cols="12" md="4">
        <div class="text-xl font-medium text-gray-400 mb-2">Order Meals</div>

        <div class="max-h-[300px] overflow-auto">
          <meal-card v-for="meal in order.meals" :meal class="mb-2" />
        </div>
      </v-col>

      <v-col cols="12" md="8">
        <div class="text-xl font-medium text-gray-400 mb-2">Order Address</div>

        <placeholder-empty
          v-if="!order.delivery_worker || order.status == 'Ready'"
          >This order is not under delivery yet!</placeholder-empty
        >

        <client-only v-else>
          <order-map
            :status="order.status"
            :driver="order.delivery_worker"
            :order-address="order.address"
          ></order-map>
        </client-only>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const orderStore = useOrderStore();

const route = useRoute();

const orderId = route.params.order_id;

const { pending } = useLazyAsyncData(() => orderStore.get(Number(orderId)));

const { order } = storeToRefs(orderStore);

const orderStatus = computed(() => {
  if (!order.value.delivery_worker) return 'ready';
  else if (order.value.status == 'Delivered') return 'done';
  else if (order.value.status == 'Ready') return 'assigned';
  return 'on-way';
});
</script>
