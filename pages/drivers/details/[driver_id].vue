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
              <v-chip color="primary">Yasser jamal</v-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Email</div>
              <v-chip>yasserjamalaldeen@gmail.com</v-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Phone Number</div>
              <v-chip color="info">0993544766</v-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Status</div>
              <base-status-chip status="Active"></base-status-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Points</div>
              <v-chip color="info">100 points</v-chip>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="flex items-center gap-2">
              <div class="text-sm font-semibold">Cancelation Count</div>
              <v-chip color="primary">49 time</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <div class="flex items-center gap-2 mt-4 mb-2 text-primary mt-6">
      <v-icon>mdi-card-account-details</v-icon>
      <h2 class="text-lg font-semibold">Driver Complaints</h2>
    </div>
    
    <div class="overflow-hidden">
      <Swiper
        :slides-per-view="3"
        space-between="30"
        class="flex justify-center"
        centered-slides
      >
        <SwiperSlide>
          <complaint-card class="mb-2"></complaint-card>
        </SwiperSlide>
        <SwiperSlide>
          <complaint-card class="mb-2"></complaint-card>
        </SwiperSlide>

        <SwiperSlide>
          <complaint-card class="mb-2"></complaint-card>
        </SwiperSlide>
        <SwiperSlide>
          <complaint-card class="mb-2"></complaint-card>
        </SwiperSlide>
      </Swiper>
    </div>
  </v-container>
</template>

<script setup lang="ts"></script>
