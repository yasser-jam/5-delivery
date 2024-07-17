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
          <v-data-table
            :headers="headers"
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
const driverStore = useDriverStore();

const { headers, drivers } = storeToRefs(driverStore);

const { pending } = useLazyAsyncData(() => driverStore.list());
</script>
