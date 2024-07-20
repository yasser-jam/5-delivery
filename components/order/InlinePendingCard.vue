<template>
    <div
      class="flex justify-between items-center p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray relative"
    >
    <div>
        <div class="text-gray font-semibold text-2xl">ID: #{{ order.id }}</div>
    </div>
  
      <div class="flex flex-col justify-center items-self-end">
        <div class="text-gray-200">Order</div>
        <div class="text-gray font-semibold text-2xl">
          {{ order?.order_price }} <span class="text-gray-200 text-sm">S.P</span>
        </div>
      </div>
  
      <div class="flex flex-col justify-center">
        <div class="text-gray-200">Delivery</div>
        <div class="text-gray font-semibold text-2xl">
          {{ order?.delivery_cost }} <span class="text-gray-200 text-sm">S.P</span>
        </div>
      </div>
  
      <v-chip class="text-gray">{{ dayjs(order?.order_date).format('DD-MM-YYYY') }}</v-chip>
    </div>
  </template>
  
  <script setup lang="ts">
  import dayjs from 'dayjs'
  
  defineProps<{
    order: Order;
  }>();
  </script>
  
  <style scoped>
  .bg-icon {
    position: absolute;
    right: 2rem;
    top: 0.25rem;
    font-size: 4rem;
    z-index: 1;
    color: #ffc10722;
  }</style>
  