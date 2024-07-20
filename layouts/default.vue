<template>
  <v-app id="inspire">
    <v-navigation-drawer color="secondary" class="flex justify-center">
      <layout-sidebar></layout-sidebar>
    </v-navigation-drawer>

    <!-- <v-navigation-drawer permanent width="150" class="flex justify-center">
      <v-list-item>
        <div>
          <img src="./../assets/images/logo2.png" width="100" />
        </div>
        </v-list-item>

      <v-list class="flex flex-col justify-center items-center gap-8 h-full px-4">
        <v-list-item  class="flex jutsify-center w-fit rounded-lg">
          <v-icon size="3.5rem" color="grey">mdi-moped</v-icon>
        </v-list-item>

        <v-list-item  class="flex jutsify-center w-fit rounded-lg">
          <v-icon size="3.5rem" color="grey">mdi-moped</v-icon>
        </v-list-item>

        <v-list-item  class="flex jutsify-center w-fit rounded-lg">
          <v-icon size="3.5rem" color="grey">mdi-moped</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar class="!shadow-none py-4">
      <v-app-bar-title class="px-4 mx-0">
        <div class="flex items-center justify-between">
          <div>
            <img src="./../assets/images/logo2.png" width="200" alt="logo" />
          </div>

          <v-btn
            prepend-icon="mdi-logout"
            color="error"
            variant="outlined"
            @click="logout"
            >Logout</v-btn
          >
        </div>
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-[#FCFCFC]">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const accessToken = useCookie('5d_access_token');

const logout = () => {
  // delete cookie
  accessToken.value = null;

  // navigate to login page
  navigateTo('/login');
};
</script>
