<template>
  <v-container>
    <div class="my-4">
      <h1 class="text-3xl font-semibold text-secondary mb-2">
        Complaints List
      </h1>

      <div class="text-gray-500 text-sm">
        List All Complaints assigned to drivers
      </div>
    </div>

    <v-row>
      <v-col cols="12">
        <v-card class="!shadow-sm">
          <v-data-table
            :headers="headers"
            :items="complaints"
            class="rounded-lg"
          >
            <template #item.complaint="{ item }">
              <div class="flex items-center gap-2 my-4 max-w-[700px] overflow-hidden whitespace-no-wrap">
                <v-avatar
                  icon="mdi-file-outline"
                  color="blue"
                  class="text-white"
                  size="small"
                />

                <div class="text-gray-400 font-medium text-sm">{{ item.complaint }}</div>
              </div>
            </template>

            <template #item.driver="{ item }">
                <v-chip color="secondary">{{ item.driver_name }}</v-chip>
            </template>

            <template #item.date="{ item }">
                <v-chip color="success">{{ item.created_at }}</v-chip>
            </template>

            <template #item.actions="{ item }">
              <div class="flex justify-end">
                <v-btn
                  color="blue"
                  rounded="lg"
                  size="x-small"
                  variant="tonal"
                  icon="mdi-eye-outline"
                  :to="`/complaints/${item.id}`"
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
const complaintStore = useComplaintStore();

const { headers } = storeToRefs(complaintStore);

const complaints = [
  {
    id: 1,
    complaint:
      'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
    created_at: '20/2/2003',
    driver_name: 'Massoud Sebki'
  },
  {
    id: 2,
    complaint:
      'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
    created_at: '20/2/2003',
    driver_name: 'Massoud Sebki'
  },
  {
    id: 3,
    complaint:
      'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
    created_at: '20/2/2003',
    driver_name: 'Massoud Sebki'
  },
  {
    id: 4,
    complaint:
      'this si test string for complaint and not real data, this si test string for complaint and not real data, this si test string for complaint and not real data',
    created_at: '20/2/2003',
    driver_name: 'Massoud Sebki'
  },
];
</script>
