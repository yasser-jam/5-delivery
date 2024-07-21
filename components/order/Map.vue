<template>
  <div id="map" class="h-[300px] w-full"></div>

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
  driver: Driver;
}>();

const driverStore = useDriverStore();

const { driverAddress } = storeToRefs(driverStore);

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
};

const updateMarkerPosition = async () => {
  try {
    await driverStore.getPosition(Number(props.driver.id));
  } catch (error) {
    console.log(error);
  }

  // lat: y, lng: x
  const newPosition = [driverAddress.value.y, driverAddress.value.x];

  console.log(newPosition);

  marker.setLatLng(newPosition);
  map.setView(newPosition, map.getZoom());
};

onMounted(() => {
  setInterval(async () => {
    // await updateMarkerPosition();
  }, 1000);
});
</script>
