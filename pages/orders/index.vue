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
            <v-data-table :headers="headers" :items="orders" :loading class="rounded-lg">
              <template #item.id="{ item }">
                <nuxt-link
                  :to="`/orders/${item.id}`"
                  class="text-decoration-none"
                >
                  <div class="flex items-center gap-2 my-2">
                    <v-avatar
                      icon="mdi-package"
                      color="grey"
                      class="text-white"
                      size="small"
                    />
  
                    <div class="flex flex-col">
                      <div class="font-semibold text-dark">#{{ item.id }}</div>
                    </div>
                  </div>
                </nuxt-link>
              </template>
  
              <template #item.order_price="{ item }">
                <div class="text-info font-semibold">
                  <span class="text-xl">{{ item.order_price }}</span>
                  <span class="ms-1 mt-1 text-sm">S.P</span>
                </div>
              </template>
  
              <template #item.delivery_cost="{ item }">
                <div class="text-purple font-semibold">
                  <span class="text-xl">{{ item.delivery_cost }}</span>
                  <span class="ms-1 mt-1 text-sm">S.P</span>
                </div>
              </template>
  
              <template #item.order_date="{ item }">
                <v-chip color="success">{{ item.order_date }}</v-chip>
              </template>
  
              <template #item.driver_worker_id="{ item }">
                  <div class="font-semibold">{{ item.delivery_worker_id }}</div>
              </template>
  
              <template #item.paid="{ item }">
                <base-paid-chip :paid="item.paid" />
              </template>
  
              <template #item.status="{ item }">
                <v-chip color="gray">{{ item.status }}</v-chip>
              </template>
  
              <template #item.actions="{ item }">
                <div class="flex justify-end gap-2">
                  <v-btn
                    color="blue"
                    rounded="lg"
                    size="x-small"
                    variant="tonal"
                    icon="mdi-eye-outline"
                    @click="navigateTo(`/orders/${item.id}`)"
                  ></v-btn>
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  
  </template>
  
  <script setup>
  const orderStore = useOrderStore();
  
  const { headers, orders } = storeToRefs(orderStore);
  
  const { pending: loading } = useLazyAsyncData(() => orderStore.list())
  </script>
  