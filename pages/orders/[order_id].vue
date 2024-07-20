<!-- <template>
  <base-page-dialog :model-value="true" :loading @close="navigateTo('/orders')">
    <template #title>Order Details</template>

    <template #body>
      <v-tabs v-model="tab">
        <v-tab name="info">Order Info</v-tab>
        <v-tab name="map">Delivery Map</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item name="map">
          <v-row>
            <v-col class="mt-4">
              <div class="font-semibold">Driver Current Position</div>
              <div id="map" class="h-[300px] w-full"></div>
            </v-col>

            <v-btn @click="initMap">click</v-btn>
          </v-row>
        </v-window-item>

        <v-window-item name="info">
          <v-row>
            <v-col cols="6">
              <div class="flex items-center gap-2">
                <div class="font-semibold">Order ID</div>
                <v-chip color="secondary">#1</v-chip>
              </div>
            </v-col>

            <v-col cols="6">
              <div class="flex items-center gap-2">
                <div class="font-semibold">Driver Name</div>
                <v-chip color="secondary">Yasser Jamal Aldeen</v-chip>
              </div>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </template>
  </base-page-dialog>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  />
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js',
      defer: true,
      async: true,
    },
  ],
});

const route = useRoute();

const orderStore = useOrderStore();

const orderId = route.params.order_id;

const { pending: loading } = useLazyAsyncData(() =>
  orderStore.get(Number(orderId))
);

const { order } = storeToRefs(orderStore);

const tab = ref('info');

const lat = ref(37.102);

let map: any;
let marker: any;

function initMap() {
  const initialPosition = [51.505, -0.09]; // Initial coordinates (latitude, longitude)

  // @ts-ignore
  map = window.L.map('map').setView(initialPosition, 13);

  // @ts-ignore
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // @ts-ignore
  marker = window.L.marker(initialPosition).addTo(map);
}

function updateMarkerPosition() {
  // Here you would fetch the new coordinates from your server or another source
  // For demonstration purposes, we'll just update the position randomly

  const newPosition = [
    marker.getLatLng().lat + (Math.random() - 0.5) * 0.01,
    marker.getLatLng().lng + (Math.random() - 0.5) * 0.01,
  ];

  marker.setLatLng(newPosition);
  map.setView(newPosition, map.getZoom());
}

// onMounted(() => {
//   setInterval(() => {
//     updateMarkerPosition()
//   }, 2000)
// });
</script> -->

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mb-2">
        <order-timeline></order-timeline>
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
          <meal-card v-for="meal in order.meals" :meal class="mb-2" />
          <meal-card v-for="meal in order.meals" :meal class="mb-2" />
        </div>
      </v-col>

      <v-col cols="12" md="8">
        <div class="text-xl font-medium text-gray-400 mb-2">
          Order Address
        </div>

        <order-map is-done></order-map>
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
