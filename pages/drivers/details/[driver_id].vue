<template>
  <v-container>
    <div class="flex items-center gap-2 mt-8 mb-2 text-primary">
      <v-icon>mdi-information</v-icon>
      <h2 class="text-lg font-semibold">Driver Information</h2>
    </div>

    <v-card class="!shadow-sm">
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Name</div>
              <v-chip color="primary">{{ driver.name }}</v-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Email</div>
              <v-chip>{{ driver.email }}</v-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Phone Number</div>
              <v-chip color="info">{{ driver.phone }}</v-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Status</div>
              <base-status-chip :status="driver.status"></base-status-chip>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <div class="flex items-center gap-2 mt-4 mb-2 text-primary mt-6">
      <v-icon>mdi-card-account-details</v-icon>
      <h2 class="text-lg font-semibold">Driver Complaints</h2>
    </div>
    
    <div v-if="driver.complaints?.length" class="overflow-hidden">
      <Swiper
        :slides-per-view="3"
        space-between="30"
        :centered-slides="false"
      >
        <SwiperSlide v-for="complaint in driver.complaints">
          <complaint-card :complaint class="mb-2"></complaint-card>
        </SwiperSlide>
      </Swiper>
    </div>

    <placeholder-empty name="complaints" v-else />
  </v-container>
</template>

<script setup lang="ts">

const driverStore = useDriverStore()

const route = useRoute()

const driverId = route.params.driver_id

const { pending } = useLazyAsyncData(() => driverStore.get(Number(driverId)))

const { driver } = storeToRefs(driverStore)

</script>
