<template>
  <v-container class="my-2">
    <base-title-section
      title="Add Driver"
      subtitle="List all Drivers (Active and Inactive)"
      btn-title="Add Driver"
      btn-link="/drivers/create"
    >
    </base-title-section>

    <placeholder-loading v-if="pending" name="Drivers" />

    <v-row v-else-if="!pending && drivers.length">
      <v-col v-for="driver in drivers" cols="12" md="4">
        <driver-card
          :driver
          editable
          :is-active="driver.status == 'Active'"
          @remove="openDeleteDialog(Number(driver.id))"
        />
      </v-col>
    </v-row>

    <placeholder-empty v-else name="Drivers" />
  </v-container>

  <dialog-remove
    v-model="deleteDialogToggler"
    :loading="deleteLoading"
    @remove="remove"
    item="driver"
  />

  <NuxtPage />
</template>

<script setup lang="ts">
const driverStore = useDriverStore();

const { drivers } = storeToRefs(driverStore);

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
    // stop loader
    deleteLoading.value = false;

    // close dialog
    deleteDialogToggler.value = false
  }
};
</script>
