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
  status: string;
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

const initMap = async () => {
  // @ts-ignore
  const L: any = await import('leaflet'); // Import Leaflet

  const driverPosition = [0, 0]; // Initial coordinates (latitude, longitude)
  const targetPosition = [0, 0]; // Coordinates for the additional marker

  map = L.map('map').setView(driverPosition, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  const driverIcon = {
    iconUrl:
      'https://img.icons8.com/?size=100&id=tSc6Ou2iMbdd&format=png&color=000000',
    iconSize: [50, 50],
  };

  const mapIcon = {
    iconUrl:
      'https://img.icons8.com/?size=100&id=13800&format=png&color=000000',
    iconSize: [40, 40],
  };

  let mIcon = L.icon(mapIcon);

  const iconOptions = {
    icon: mIcon,
  };

  let dIcon = L.icon(driverIcon);

  const driverIconOptions = {
    icon: dIcon,
  };

  // add driver marker when order is not delivered yet
  if (props.status != 'Delivered') marker = L.marker(driverPosition, driverIconOptions).addTo(map);

  targetMarker = L.marker(targetPosition, iconOptions).addTo(map);
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

  // stop interval when order is delivered
  if (props.status != 'Delivered') {
    interval = setInterval(() => {
      updateMarkerPosition();
    }, 1000 * 5);
  }
});
</script>
