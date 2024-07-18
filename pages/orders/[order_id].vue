<template>
  <base-page-dialog :model-value="true" @close="navigateTo('/orders')">
    <template #title>Order Details</template>

    <template #body>
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

        <v-col class="mt-4">
          <div class="font-semibold">Driver Current Position</div>

          <div class="w-full">
            <!-- <img
              :src="`https://maps.google.com/maps?q=36,${lat}&hl=es;z=25&amp;output=embed`"
              width="100%"
              height="250"
              style="border: 0"
            /> -->

            <div id="map" class="h-[300px] w-full"></div>

            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13304.755359898563!2d36.28535544678928!3d33.52247554967195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7303c56f007%3A0x24e5c252433c695a!2sAbu%20Shaker!5e0!3m2!1sen!2s!4v1721201809329!5m2!1sen!2s" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
          </div>
        </v-col>

        <v-btn @click="initMap">click</v-btn>
      </v-row>
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
</script>
