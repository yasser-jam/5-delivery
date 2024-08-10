<template>
  <div
    class="flex justify-between items-center p-4 rounded-lg border-2 border-dashed relative"
    :class="isActive ? 'border-amber bg-amber-50' : 'border-gray bg-gray-50'"
  >
    <div>
      <nuxt-link :to="`/drivers/details/${driver.id}`">
        <div
          class="font-semibold text-2xl"
          :class="isActive ? 'text-amber' : 'text-gray'"
        >
          {{ driver.name }}
        </div>
      </nuxt-link>
      <div class="text-gray-400 text-base">
        {{ driver.email }}
      </div>

      <div
        class="flex items-center gap-2 font-medium mt-4"
        :class="isActive ? 'text-amber' : 'text-gray'"
      >
        <v-icon>mdi-phone</v-icon>
        <div>{{ driver.phone }}</div>
      </div>
    </div>

    <v-icon
      class="bg-icon"
      :class="isActive ? 'color-[#ffc10722]' : 'color-[#9ca3af2c]'"
      >mdi-moped</v-icon
    >

    <v-menu v-if="editable" class="z-50" style="z-index: 999999">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="!absolute top-2 right-2 z-50"
          color="grey"
          variant="text"
          icon="mdi-dots-vertical"
        ></v-btn>
      </template>

      <v-list density="compact" class="py-0">
        <v-list-item :to="`/drivers/${driver.id}`">
          <div class="flex gap-2 py-2 px-2">
            <v-icon color="blue" size="small">mdi-pencil</v-icon>
            <div class="font-medium text-sm text-gray-500">Edit</div>
          </div>
        </v-list-item>

        <v-list-item @click="$emit('remove')">
          <div class="flex gap-2 py-2 px-2">
            <v-icon color="error" size="small">mdi-trash-can</v-icon>
            <div class="font-medium text-sm text-gray-500">Delete</div>
          </div>
        </v-list-item>

        <v-list-item v-if="driver.status == 'Inactive'" :disabled="activateLoading" @click="activate">
          <div
            v-if="activateLoading"
            class="flex justify-center"
          >
            <v-progress-circular indeterminate size="small" color="primary" />
          </div>

          <div v-else class="flex gap-2 py-2 px-2">
            <v-icon color="success" size="small">mdi-check</v-icon>
            <div class="font-medium text-sm text-gray-500">Activate</div>
          </div>
        </v-list-item>

        <v-list-item v-else :disabled="deactivateLoading" @click="deactivate">
          <div
            v-if="deactivateLoading"
            class="flex justify-center"
          >
            <v-progress-circular indeterminate size="small" color="primary" />
          </div>

          <div v-else class="flex gap-2 py-2 px-2">
            <v-icon color="gray" size="small">mdi-cancel</v-icon>
            <div class="font-medium text-sm text-gray-500">Deactivate</div>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
const driverStore = useDriverStore();

const props = defineProps<{
  driver: Driver;
  editable?: boolean;
  isActive?: boolean;
}>();

const activateLoading = ref(false);
const deactivateLoading = ref(false);

const activate = async () => {
  activateLoading.value = true;

  try {
    await driverStore.activate(Number(props.driver.id));

    await driverStore.list();
  } finally {
    activateLoading.value = false;
  }
};

const deactivate = async () => {
  deactivateLoading.value = true;

  try {
    await driverStore.deactivate(Number(props.driver.id));

    await driverStore.list();
  } finally {
    deactivateLoading.value = false;
  }
};
</script>

<style scoped>
.bg-icon {
  right: 1rem;
  top: 0.75rem;
  font-size: 7rem;
}
</style>
