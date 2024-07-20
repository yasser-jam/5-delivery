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
      <v-col cols="12" md="4">
        <driver-card :driver="{}" />
      </v-col>

      <v-col cols="12" md="4">
        <driver-card :driver="{}" />
      </v-col>
      <v-col cols="12" md="4">
        <driver-card :driver="{}" />
      </v-col>
      <v-col cols="12" md="4">
        <driver-card :driver="{}" />
      </v-col>

      <v-col cols="12" md="4">
        <driver-card :driver="{}" />
        <!-- <v-card class="!shadow-sm">
          <v-data-table
            :headers="headers as any"
            :items="drivers"
            :loading="pending"
            class="rounded-lg"
          >
            <template #item.name="{ item }">
              <nuxt-link
                :to="`/drivers/${item.id}`"
                class="text-decoration-none"
              >
                <div class="flex items-center gap-2 my-2">
                  <v-avatar
                    icon="mdi:account"
                    color="grey"
                    class="text-white"
                    size="small"
                  />

                  <div class="flex flex-col">
                    <div class="font-semibold text-dark">
                      {{ item.name }}
                    </div>
                    <div class="text-gray-500">{{ item.email }}</div>
                  </div>
                </div>
              </nuxt-link>
            </template>

            <template #item.phonenumber="{ item }">
              <v-chip class="!font-semibold">{{ item.phone }}</v-chip>
            </template>

            <template #item.status="{ item }">
              <base-status-chip :status="item.status"></base-status-chip>
            </template>

            <template #item.actions="{ item }">
              <div class="flex justify-end gap-2">
                <v-btn
                  color="blue"
                  rounded="lg"
                  size="x-small"
                  variant="tonal"
                  icon="mdi-pencil"
                  :to="`/drivers/${item.id}`"
                ></v-btn>
                <v-btn
                  color="error"
                  rounded="lg"
                  size="x-small"
                  variant="tonal"
                  icon="mdi-delete"
                  @click="openDeleteDialog(Number(item.id))"
                ></v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card> -->
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
