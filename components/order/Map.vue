<template>
  <div id="map" class="h-[300px] w-full"></div>

  <div
    v-if="!hasAddress"
    class="flex items-center gap-2 text-gray-500 font-italic mt-2"
  >
    <v-icon>mdi-information</v-icon>
    <div>Driver has no assigned address</div>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const toasterStore = useToasterStore();

const props = defineProps<{
  driver: Driver;
  orderAddress: any;
}>();

const driverStore = useDriverStore();
const { driverAddress } = storeToRefs(driverStore);

let map: any = null;
let marker: any = null;
let targetMarker = null; // Additional marker
let interval: any;

const hasAddress = ref<boolean>(true);

const targetIcon = {
  tilte: 'Target Position',
};

const initMap = async () => {
  // @ts-ignore
  const L: any = await import('leaflet'); // Import Leaflet

  const driverPosition = [35, 35]; // Initial coordinates (latitude, longitude)
  const targetPosition = [props.orderAddress.y, props.orderAddress.x]; // Coordinates for the additional marker

  map = L.map('map').setView(driverPosition, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  const customIcon = {
    iconUrl:
      'https://img.icons8.com/?size=100&id=tSc6Ou2iMbdd&format=png&color=000000',
    iconSize: [50, 50],
  };

  let myIcon = L.icon(customIcon);

  const driverIcon = {
    tilte: 'Driver Position',
    icon: myIcon,
  };

  marker = L.marker(driverPosition, driverIcon).addTo(map);

  targetMarker = L.marker(targetPosition, targetIcon).addTo(map);

  console.log(targetMarker);
};

const updateMarkerPosition = async () => {
  try {
    // Only send request if there is no active one now (to send request only one time even with interval)
    await driverStore.getPosition(Number(props.driver.id));

    // Set has address to true
    hasAddress.value = true;
  } catch (error: any) {
    console.log(error);

    // Clear interval when no address found
    if (error.status == 404) {
      hasAddress.value = false;

      // Show toaster
      toasterStore.showErrorMsg('Driver has no assigned address!');

      // Clear interval
      clearInterval(interval);
    }
  }

  // lat: y, lng: x
  const newPosition = [driverAddress.value.y, driverAddress.value.x];

  marker?.setLatLng(newPosition);
  map?.setView(newPosition, map?.getZoom());
};

onMounted(async () => {
  initMap();

  await updateMarkerPosition();

  interval = setInterval(() => {
    updateMarkerPosition();
  }, 1000 * 60);
});
</script>
