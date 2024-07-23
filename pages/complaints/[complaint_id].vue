<template>
  <base-page-dialog
    :model-value="true"
    :loading
    @close="navigateTo('/complaints')"
  >
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

          <nuxt-link :to="`/orders/${complaint.order.id}`">
            <order-inline-card :order="complaint.order" />
          </nuxt-link>
        </v-col>

        <v-col cols="12">
          <base-label>Complaint Driver</base-label>

          <placeholder-empty v-if="!complaint.delivery_worker">No Assigned Delivery Worker!</placeholder-empty>
          
          <nuxt-link v-else :to="`/drivers/${complaint.delivery_worker.id}`">
            <driver-card :driver="complaint.delivery_worker" />
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

const { complaint } = storeToRefs(complaintStore);

// Todo: get order and driver info with complaint
const { pending: loading } = await useLazyAsyncData(() =>
  complaintStore.get(Number(complaintId))
);
</script>
