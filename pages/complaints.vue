<template>
  <v-container>
    <base-title-section
      title="Complaints List"
      subtitle="List All Complaints assigned to drivers"
    />

    <placeholder-loading v-if="pending" name="Complaints" />

    <v-row v-else>
      <v-col cols="12">
        <v-card class="!shadow-sm">
          <v-data-table
            :headers="headers"
            :items="complaints"
            class="rounded-lg"
          >
            <template #item.complaint="{ item }">
              <div
                class="flex items-center gap-2 my-4 max-w-[700px] overflow-hidden whitespace-no-wrap"
              >
                <v-avatar
                  icon="question-mark"
                  color="gray"
                  class="text-white"
                  size="small"
                />

                <div class="text-gray-400 font-medium text-sm">
                  {{ item.complaint }}
                </div>
              </div>
            </template>

            <template #item.order_id="{ item }">
              <v-chip color="secondary">Order #{{ item.order_id }}</v-chip>
            </template>

            <template #item.date="{ item }">
              <v-chip color="success">{{ dayjs(item.created_at).format('DD-MM-YYYY') }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <NuxtPage />
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const complaintStore = useComplaintStore();

const { headers, complaints } = storeToRefs(complaintStore);

const { pending } = useLazyAsyncData(() => complaintStore.list())

// const complaints = [
//   {
//     id: 1,
//     complaint:
//       'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
//     created_at: '20/2/2003',
//     driver_name: 'Massoud Sebki',
//   },
//   {
//     id: 2,
//     complaint:
//       'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
//     created_at: '20/2/2003',
//     driver_name: 'Massoud Sebki',
//   },
//   {
//     id: 3,
//     complaint:
//       'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
//     created_at: '20/2/2003',
//     driver_name: 'Massoud Sebki',
//   },
//   {
//     id: 4,
//     complaint:
//       'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
//     created_at: '20/2/2003',
//     driver_name: 'Massoud Sebki',
//   },
// ];
</script>
