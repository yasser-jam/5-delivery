<template>
  <v-container>
    <div class="flex justify-between my-4">
      
      <div>
        <h1 class="text-3xl font-semibold text-secondary mb-2">Drivers List</h1>

        <div class="text-gray-500 text-sm">
          List all Drivers (Active and Inactive)
        </div>
      </div>

      <v-btn
        prepend-icon="mdi-plus"
        color="blue"
        variant="tonal"
        to="/drivers/create"
      >
        Add Driver
      </v-btn>
    </div>

    <v-row>
      <v-col cols="12">
        <v-card class="!shadow-sm">
          <v-data-table :headers="headers" :items="drivers" class="rounded-lg">
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
                      Yasser jamal-aldeen
                    </div>
                    <div class="text-gray-500">yasserjamalaldeen@gmail.com</div>
                  </div>
                </div>
              </nuxt-link>
            </template>

            <template #item.phonenumber="{ item }">
              <v-chip class="!font-semibold">0993544811</v-chip>
            </template>

            <template #item.status="{ item }">
              <base-status-chip status></base-status-chip>
            </template>

            <template #item.cancel_count="{ item }">
              <div class="flex gap-1 text-xl text-blue">
                <div class="font-semibold">5</div>
                <div class="text-xs font-default mt-2">times</div>
              </div>
            </template>

            <template #item.points="{ item }">
              <div class="flex gap-1 text-xl text-primary">
                <div class="font-semibold">100</div>
                <div class="text-xs font-default mt-2">point</div>
              </div>
            </template>

            <template #item.actions="{ item }">
              <div class="flex justify-end gap-2">
                <v-btn
                  color="blue"
                  rounded="lg"
                  size="x-small"
                  variant="tonal"
                  icon="mdi-pencil"
                ></v-btn>
                <v-btn
                  color="error"
                  rounded="lg"
                  size="x-small"
                  variant="tonal"
                  icon="mdi-delete"
                ></v-btn>
              </div>
            </template>
          </v-data-table>

          <v-btn @click="test">test</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <NuxtPage />
</template>

<script setup>
const driverStore = useDriverStore();

const { headers } = storeToRefs(driverStore);

const test = async () => {
  await driverStore.list()
}

const drivers = [
  {
    name: 'Yasser jamal',
    phonenumber: '0993455611',
    status: false,
  },

  {
    name: 'Yasser jamal 2',
    phonenumber: '0993455611',
    status: false,
  },

  {
    name: 'Yasser jamal 3',
    phonenumber: '0993455611',
    status: false,
  },
  {
    name: 'Yasser jamal 2',
    phonenumber: '0993455611',
    status: false,
  },

  {
    name: 'Yasser jamal 3',
    phonenumber: '0993455611',
    status: false,
  },
  {
    name: 'Yasser jamal 2',
    phonenumber: '0993455611',
    status: false,
  },

  {
    name: 'Yasser jamal 3',
    phonenumber: '0993455611',
    status: false,
  },
  {
    name: 'Yasser jamal 2',
    phonenumber: '0993455611',
    status: false,
  },

  {
    name: 'Yasser jamal 3',
    phonenumber: '0993455611',
    status: false,
  },
  {
    name: 'Yasser jamal 2',
    phonenumber: '0993455611',
    status: false,
  },

  {
    name: 'Yasser jamal 3',
    phonenumber: '0993455611',
    status: false,
  },
];
</script>
