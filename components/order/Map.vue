<template>

  <div id="map" class="h-[300px] w-full"></div>


  <div v-if="!hasAddress" class="flex items-center gap-2 text-gray-500 font-italic mt-2">
    <v-icon>mdi-information</v-icon>
    <div>Driver has no assigned address</div>
  </div>
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

const toasterStore = useToasterStore()

const props = defineProps<{
  driver: Driver;
}>();

const driverStore = useDriverStore();

const { driverAddress } = storeToRefs(driverStore);

let map: any;
let marker: any;
let interval: any;

let hasAddress = ref<boolean>(true)

const initMap = () => {
  const initialPosition = [51.505, -0.09]; // Initial coordinates (latitude, longitude)

  // @ts-ignore
  map = window.L?.map('map').setView(initialPosition, 13);

  // @ts-ignore
  window.L?.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // @ts-ignore
  marker = window.L?.marker(initialPosition).addTo(map);
};

const updateMarkerPosition = async () => {
  try {
    // only send request if there is no active one now (to send request only one time even with interval)
    await driverStore.getPosition(Number(props.driver.id));

    // set has address to true
    hasAddress.value = true
  
  } catch (error: any) {
    console.log(error);

    // clear interval when no address found
    if (error.status == 404) {

      hasAddress.value = false

      // show toaster
      toasterStore.showErrorMsg('Driver has no assigned address!')

      // clear interval
      clearInterval(interval)
    }
  }

  // lat: y, lng: x
  const newPosition = [driverAddress.value.y, driverAddress.value.x];

  marker?.setLatLng(newPosition);

  map.setView(newPosition, map.getZoom());
};

onMounted(async () => {

  initMap()

  await updateMarkerPosition();
  
  interval = setInterval(async () => {
    if (hasAddress) {
      await updateMarkerPosition();
    }
  }, 1000 * 60);
});
</script>
