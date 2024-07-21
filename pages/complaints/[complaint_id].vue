<template>
  <base-page-dialog :model-value="true" :loading>
    <template #title>Complaint Information</template>

    <template #body>
      <v-row>
        <v-col cols="12">
          <base-label>Complaint Info</base-label>

          <div class="text-sm leading-relaxed text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            totam porro, vel at voluptatem aliquam quisquam sed reprehenderit
            cupiditate saepe
          </div>
        </v-col>

        <v-col cols="12">
          <base-label>Complaint Order</base-label>

          <order-inline-card />
        </v-col>

        <v-col cols="12">
          <base-label>Complaint Driver</base-label>

          <driver-card />
        </v-col>
      </v-row>
    </template>
  </base-page-dialog>
</template>

<script setup lang="ts">

const route = useRoute()

const complaintId = route.params.complaint_id

const complaintStore = useComplaintStore()

const { complaint } = storeToRefs(complaintStore)

const { pending: loading } = useLazyAsyncData(() => complaintStore.get(Number(complaintId)))


</script>
