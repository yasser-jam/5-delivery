<template>
  <div
    v-if="isDone"
    class="flex items-center justify-center h-[300px] border-2 border-dashed border-teal text-xl text-teal bg-teal-50 py-2 px-4"
  >
    <v-icon color="teal">mdi-check</v-icon>
    Order Deliverd
  </div>

  <div v-else id="map" class="h-[300px] w-full"></div>

  <div></div>

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

defineProps<{
  order: Order;
  isDone: boolean;
}>();


const lat = ref(37.102);

let map: any;
let marker: any;

const initMap = () => {
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

const updateMarkerPosition = () => {
  // Here you would fetch the new coordinates from your server or another source
  // For demonstration purposes, we'll just update the position randomly

  const newPosition = [
    marker.getLatLng().lat + (Math.random() - 0.5) * 0.01,
    marker.getLatLng().lng + (Math.random() - 0.5) * 0.01,
  ];

  marker.setLatLng(newPosition);
  map.setView(newPosition, map.getZoom());
}
</script>
