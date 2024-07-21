<template>
  <placeholder-loading v-if="pending" name="Order" class="my-4" />

  <v-container v-else>

    <div class="flex justify-between items-center mt-8 mb-2">
      <div>
        <div class="text-4xl text-primary font-semibold">Order #1 <span class="text-amber-300 text-xl">(Italian Restaurant)</span> </div>

        <div class="flex gap-2 items-center text-gray-500 mt-4">
          <div class="flex items-center gap-2">
            <v-icon>mdi-calendar</v-icon>
            <div>20/2/2003</div>
          </div>

          <div>/</div>

          <div class="flex items-center gap-2">
            <v-icon>mdi-cash</v-icon>
            <div>1000S.P</div>
          </div>
        </div>
      </div>

      <v-chip size="large" color="blue">Ready</v-chip>
    </div>

    <v-row>
      <v-col cols="12" class="mb-2">
        <order-timeline :status="order.delivery_worker_id ? 'assigned' : 'ready'" />
      </v-col>

      <v-col cols="12" md="6">
        <div class="text-xl font-medium text-gray-400 mb-2">
          Delivery Worker
        </div>

        <driver-card :driver="order.delivery_worker" />
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

        <order-map :order :is-assigned="Boolean(order.delivery_worker_id)"></order-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const orderStore = useOrderStore();

const route = useRoute();

const orderId = route.params.order_id;

const { pending } = useLazyAsyncData(() => orderStore.get(Number(orderId)));

// const { order } = storeToRefs(orderStore);

const order = ref<Order>({
  id: 0,
  status: 'Ready', // Todo: get the right status values
  order_price: '1000',
  delivery_cost: '20',
  order_date: '20/2/2001',
  paid: 1,
  user_id: 1,
  user: {
    id: 1,
    name: 'Yasser Jamal Al-deen',
    email: 'yasserjamalaldeen@gmail.com',
    email_verified_at: null,
    phone: '213123',
    cancel_count: 1,
    points: 100,
    blocked_until: '20/2/2001',
    status: 'Active',
  },
  address_id: 1,
  address: {
    id: 1,
    x: 1,
    y: 4,
    address_name: 'test',
  },
  delivery_received: 1,
  delivery_worker_id: '1',
  delivery_worker: {
    id: 1,
    name: 'Ahmad',
    email: 'ahmad@gmail.com',
    password: 'password',
    password_confirmation: 'password',
    phone: '0993544811',
    status: 'Active',
  },
  restaurant_name: 'Italiano',
  meals: [
    {
      id: 1,
      name: 'Ice Cream',
      photo: '',
      price: '10000',
      description: 'Very Good and Beautiful Icecream',
      owner_resturent_id: 1,
      category_id: 1,
      price_after_discount: 2000,
      end_date: null,
      quantity: '2',
      size: 'large',
      addons: [],
      withouts: [],
    },
  ],
});
</script>
