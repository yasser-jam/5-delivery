<template>
  <v-app id="inspire">
    <v-main>
      <v-row class="h-full">
        <v-col cols="6">
          <div class="flex flex-col justify-center items-center h-full bg-[#fefefa]">
              <img
                src="./../assets/images/logo2.png"
                width="400"
                alt="logo"
                class="mb-2"
              />

              <div class="subtitle text-gray-400 text-lg text-center px-16 leading-relaxed">Best Delivery App Ever!</div>
          </div>
        </v-col>

        <v-col cols="6" class="h-full">
          <div class="flex flex-col justify-center items-center h-full bg-white px-24">
            <div class="text-5xl font-semibold text-primary">Login</div>

            <NuxtPage />
          </div>
        </v-col>
      </v-row>

      <div
        class="flex items-center justify-center w-full h-full bg-[#fcfcfc]"
      ></div>
    </v-main>

    <base-toaster v-model="showToaster" :status="toasterStatus" :msg />

  </v-app>
</template>

<script setup>
import { useToasterStore } from '~/stores/toaster';

const toasterStore = useToasterStore()

const { msg, showToaster, toasterStatus } = storeToRefs(toasterStore)


</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.subtitle {
    font-family: "Laboster", cursive;
}
</style>
