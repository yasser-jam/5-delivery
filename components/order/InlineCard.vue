<template>
  <div
    ref="el"
    class="flex justify-between items-center p-6 bg-teal-50 rounded-lg border-2 border-dashed border-teal relative"
  >
    <div>
      <div class="text-teal font-semibold text-2xl">ID: #{{ order.id }}</div>
    </div>

    <div class="flex flex-col justify-center items-self-end">
      <div class="text-teal-200">Order</div>
      <div class="text-teal font-semibold text-2xl">
        {{ order?.order_price }} <span class="text-teal-200 text-sm">S.P</span>
      </div>
    </div>

    <div class="flex flex-col justify-center">
      <div class="text-teal-200">Delivery</div>
      <div class="text-teal font-semibold text-2xl">
        {{ order?.delivery_cost }}
        <span class="text-teal-200 text-sm">S.P</span>
      </div>
    </div>

    <!-- {{ isOverDropZone }} -->
    <v-chip class="text-teal">{{
      dayjs(order?.order_date).format('DD-MM-YYYY')
    }}</v-chip>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { useDropZone } from '@vueuse/core';

const props = defineProps<{
  order: Order;
}>();

const emit = defineEmits(['drop'])

const el = ref<HTMLDivElement>();

function onDrop() {
  // called when files are dropped on zone
  emit('drop', props.order)
}

const { isOverDropZone } = useDropZone(el, {
  onDrop,
});
</script>