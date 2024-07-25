<template>
    <div class="flex items-center justify-between bg-white py-2 px-4 rounded-lg">
        
        <div class="flex items-center gap-6">

            <nuxt-link :to="`/drivers/details/${driver?.id}`">

                <div class="flex items-center gap-2">
                    <v-avatar icon="mdi-moped" size="small" class="text-white" color="blue" />
            
                    <div class="text-secondary font-medium">{{ driver?.name }}</div>
                </div>

            </nuxt-link>
    
            <v-icon color="grey">mdi-arrow-right-bold</v-icon>
    
            <nuxt-link :to="`/orders/${order.id}`">
                <div class="flex items-center gap-2">
                    <v-avatar icon="mdi-package" size="small" class="text-white" color="success" />
            
                    <div class="text-secondary font-medium">Order - #{{ order.id }}</div>
                </div>
            </nuxt-link>
        </div>
        

        <v-chip :color="status == 'in_progress' ? 'blue' : 'gray'">
            {{ status == 'in_progress' ? 'Under Delivery' : 'Pending' }}
        </v-chip>

    </div>
</template>

<script setup lang="ts">
defineProps<{
    order: Order
    status: 'in_progress' | 'pending',
    driver: Driver
}>()
</script>