<template>
    <div class="flex items-center py-6 px-6 bg-amber-50 rounded-lg border-2 border-dashed border-amber relative">

        <v-icon class="bg-icon">mdi-moped</v-icon>

        <div class="flex flex-col gap-4">
            <div>
                <div class="text-amber font-semibold text-2xl">
                    Yasser Jamal Al-Deen
                </div>
                <div class="text-gray-400 text-base">
                    yasserjamalaldeen@gmail.com
                </div>


                <div class="flex items-center gap-2 font-medium text-amber mt-4">
                    <v-icon>mdi-phone</v-icon>
                    <div>0993544811</div>
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
    right: 2rem;
    top: .25rem;
    font-size: 8rem;
    z-index: 1;
    color: #ffc10722
}
</style>