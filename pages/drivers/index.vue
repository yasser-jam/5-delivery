<template>
  <v-container class="my-2">
    <base-title-section
      title="Add Driver"
      subtitle="List all Drivers (Active and Inactive)"
      btn-title="Add Driver"
      btn-link="/drivers/create"
    >
    </base-title-section>

    <v-row>
      <v-col v-for="driver in drivers" cols="12" md="4">
        <nuxt-link
          :to="`/drivers/details/${driver.id}`"
          class="decoration-none"
        >
          <driver-card :driver />
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>

  <dialog-remove
    v-model="deleteDialogToggler"
    :loading="deleteLoading"
    @delete="remove"
    item="driver"
  />

  <NuxtPage />
</template>

<script setup lang="ts">
const driverStore = useDriverStore();

const { headers, drivers } = storeToRefs(driverStore);

const deletedId = ref<number>();
const deleteDialogToggler = ref<boolean>(false);
const deleteLoading = ref<boolean>(false);

const { pending } = useLazyAsyncData(() => driverStore.list());

const openDeleteDialog = (id: number) => {
  deletedId.value = id;
  deleteDialogToggler.value = true;
};

const remove = async () => {
  deleteLoading.value = true;

  try {
    await driverStore.remove(Number(deletedId.value));
  } finally {
    deleteLoading.value = false;
  }
};
</script>
