<template>
  <v-dialog width="500">
    <base-card :loading>
      <div class="flex flex-col items-center gap-2">
        <v-icon color="primary" size="3rem">mdi-information</v-icon>
        <div class="text-xl font-semibold text-">Order Confirmation</div>
      </div>

      <div class="flex justify-center items-center my-8">
        <div
          class="flex flex-col justify-center p-4 bg-blue-50 text-blue rounded-lg w-48 gap-2 items-center border-2 border-dashed border-blue"
        >
          <v-avatar icon="mdi-moped" color="blue"></v-avatar>
          <div>{{ driver.name }}</div>
        </div>

        <v-icon class="mx-4" color="gray" size="large"
          >mdi-arrow-right-bold</v-icon
        >

        <div class="">
          <div
            class="flex flex-col justify-center gap-2 items-center p-4 bg-teal-50 text-teal rounded-lg w-48 border-2 border-dashed border-teal"
          >
            <v-avatar
              icon="mdi-package"
              color="success"
              class="text-white"
            ></v-avatar>
            <div>#{{ order.id }}</div>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-2">
        <v-btn
          variant="text"
          color="gray"
          @click="emit('update:model-value', false)"
          >Close</v-btn
        >
        <v-btn color="secondary" @click="assign" :loading>Save</v-btn>
      </div>
    </base-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  driver: Driver;
  order: Order;
}>();

const emit = defineEmits(['update:model-value', 'assign']);

const orderStore = useOrderStore();

const loading = ref<boolean>(false);

const assign = async () => {
  loading.value = true
  
  try {
    await orderStore.assign(Number(props.driver.id), Number(props.order.id));
  } finally {
    loading.value = false;

    emit('update:model-value', false)
  }
};
</script>
