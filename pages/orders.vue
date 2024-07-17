<template>
  <v-container>
    <div class="flex justify-between my-4">
      <div>
        <h1 class="text-3xl font-semibold text-secondary mb-2">Orders List</h1>

        <div class="text-gray-500 text-sm">
          List all Orders (In-progress and Ready)
        </div>
      </div>
    </div>

    <v-row>
      <v-col cols="12">
        <v-card class="!shadow-sm">
          <v-data-table :headers="headers" :items="orders" class="rounded-lg">
            <template #item.id="{ item }">
              <nuxt-link
                :to="`/orders/${item.id}`"
                class="text-decoration-none"
              >
                <div class="flex items-center gap-2 my-2">
                  <v-avatar
                    icon="mdi:package"
                    color="grey"
                    class="text-white"
                    size="small"
                  />

                  <div class="flex flex-col">
                    <div class="font-semibold text-dark">#111</div>
                  </div>
                </div>
              </nuxt-link>
            </template>

            <template #item.driver_name="{ item }">
                <div class="font-semibold">{{ item.driver_name }}</div>
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
                  icon="mdi-eye-outline"
                ></v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <NuxtPage />
</template>

<script setup>
const orderStore = useOrderStore();

const { headers } = storeToRefs(orderStore);

const orders = [
  {
    id: 1,
    driver_name: 'Yasser jamal',
    status: false,
  },
  {
    id: 2,
    driver_name: 'Anas',
    status: true,
  },
  {
    id: 3,
    driver_name: 'Mouhannad',
    status: true,
  },
  {
    id: 4,
    driver_name: 'Tamim',
    status: false,
  },
  {
    id: 5,
    driver_name: 'Rami',
    status: false,
  },
];
</script>
