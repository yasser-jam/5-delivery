<template>
    <div class="flex justify-between items-center py-6 px-6 bg-violet-50 rounded-lg relative border-2 border-dashed border-violet">
        <div class="flex flex-col gap-4">
            <div>
                <div class="text-violet font-semibold text-2xl">
                    Yasser Jamal Al-Deen
                </div>
                <div class="text-gray-400 text-base">
                    yasserjamalaldeen@gmail.com
                </div>


                <div class="flex items-center gap-2 font-medium text-violet mt-4">
                    <v-icon>mdi-phone</v-icon>
                    <div>0993544811</div>
                </div>
            </div>

        </div>

        <v-icon class="bg-icon">mdi-account</v-icon>


    </div>
</template>

<script setup lang="ts">
defineProps<{
    user: User
}>()
</script>

<style scoped>
.bg-icon {
    font-size: 6rem;
    z-index: 1;
    color: #a78bfa44
}
</style>