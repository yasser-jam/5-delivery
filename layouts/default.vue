<template>
  <v-app id="inspire">
    <v-navigation-drawer color="secondary">
      <layout-sidebar></layout-sidebar>
    </v-navigation-drawer>

    <v-app-bar color="white" class="!shadow-sm">
      <v-app-bar-title class="px-4 mx-0 ">
        <div class="flex items-center justify-between">
          <h1  class="text-3xl text-secondary font-medium">5-Delivery</h1>
        
        
          <v-btn prepend-icon="mdi-logout" color="error" variant="outlined">Logout</v-btn>
        </div>


      </v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-[#FCFCFC]">
      <NuxtPage />
    </v-main>
  </v-app>
</template>
