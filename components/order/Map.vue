<template>
  <div
    v-if="!isAssigned"
    class="flex items-center justify-center h-[300px] border-2 border-dashed border-gray text-xl text-gray bg-gray-50 py-2 px-4"
  >
    <v-icon color="gray">mdi-map</v-icon>
    Not Assigned Yet
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

const props = defineProps<{
  order: Order;
  isAssigned: boolean;
}>();

const orderStore = useOrderStore()

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

const updateMarkerPosition = async () => {
  // Here you would fetch the new coordinates from your server or another source
  // For demonstration purposes, we'll just update the position randomly

  let coordinates = {
    x: 10,
    y: 100
  }

  try {
    coordinates = await orderStore.getPosition()
  } catch (error) {
    console.log(error);
  }

  // Todo: replace new position with value from getPosition
  const newPosition = [
    marker.getLatLng().lat + (Math.random() - 0.5) * 0.01,
    marker.getLatLng().lng + (Math.random() - 0.5) * 0.01,
  ];

  marker.setLatLng(newPosition);
  map.setView(newPosition, map.getZoom());
}

onMounted(() => {
  if (props.isAssigned) initMap()

  setInterval(async () => {
    await updateMarkerPosition()
  }, 1000)
})
</script>
