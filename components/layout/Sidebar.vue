<template>
  <v-list class="flex flex-col justify-center items-center">
    <v-list-item class="mt-4">
      <v-avatar
        icon="mdi-account"
        size="x-large"
        color="white"
        class="text-dark text-2xl"
      ></v-avatar>

      <!-- <div class="flex items-center justify-center w-58">
        <img src="~/assets/images/logo2.png" width="100%" alt="">
      </div> -->
    </v-list-item>

    <v-list-item
      class="text-center"
      lines="two"
      subtitle="Delivery Admin"
      title="Yasser Jamal Al-Deen"
    >
    </v-list-item>
  </v-list>

  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item v-for="(item, i) in items" color="gray" class="mt-2" :to="item.link">
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
const items = [
  { text: 'Delivery Drivers', icon: 'mdi-moped', link: '/drivers' },
  { text: 'Orders', icon: 'mdi-package', link: '/orders' },
  { text: 'Complaints', icon: 'mdi-file-outline', link: '/Complaints' },
];
</script>
