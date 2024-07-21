<template>
  <base-page-dialog :model-value="true" :loading @close="navigateTo('/complaints')">
    <template #title>Complaint Information</template>

    <template #body>
      <v-row>
        <v-col cols="12">
          <base-label>Complaint</base-label>

          <div class="text-sm leading-relaxed text-gray-500">
            {{ complaint.complaint }}
          </div>
        </v-col>

        <v-col cols="12">
          <base-label>Complaint Order</base-label>

          <nuxt-link :to="`/orders/${order.id}`">
            <order-inline-card :order />
          </nuxt-link>
        </v-col>

        <v-col v-if="driver" cols="12">
          <base-label>Complaint Driver</base-label>

          <nuxt-link :to="`/drivers/${driver.id}`">
            <driver-card :driver />
          </nuxt-link>
        </v-col>
      </v-row>
    </template>
  </base-page-dialog>
</template>

<script setup lang="ts">
const route = useRoute();

const complaintId = route.params.complaint_id;

const complaintStore = useComplaintStore();
const orderStore = useOrderStore();
const driverStore = useDriverStore();

const { complaint } = storeToRefs(complaintStore);
const { order } = storeToRefs(orderStore);
const { driver } = storeToRefs(driverStore);

// Todo: get order and driver info with complaint
const { pending: loading } = await useLazyAsyncData(() =>
  complaintStore.get(Number(complaintId)).then(() => {
    orderStore.get(Number(complaint.value.order_id)).then(() => {
      if (complaint.value.delivery_worker_id) driverStore.get(Number(complaint.value.delivery_worker_id));
    });
  })
);
</script>
