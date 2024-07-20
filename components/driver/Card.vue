<template>
    <div class="flex items-center py-6 px-6 bg-amber-50 rounded-lg border-2 border-dashed border-amber relative">

        <v-icon class="bg-icon">mdi-moped</v-icon>

        <div class="flex flex-col gap-4">
            <div>
                <div class="text-amber font-semibold text-2xl">
                    {{ driver.name }}
                </div>
                <div class="text-gray-400 text-base">
                    {{ driver.email }}
                </div>


                <div class="flex items-center gap-2 font-medium text-amber mt-4">
                    <v-icon>mdi-phone</v-icon>
                    <div>{{ driver.phone }}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    driver: Driver
}>()
</script>

<style scoped>
.bg-icon {
    position: absolute;
    right: 1rem;
    top: .75rem;
    font-size: 7rem;
    z-index: 1;
    color: #ffc10722
}
</style>