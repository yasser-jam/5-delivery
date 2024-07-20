<template>
    <div class="flex items-center p-4 bg-blue-50 rounded-lg relative">

        <v-icon class="bg-icon">mdi-food</v-icon>

        <div class="flex flex-col gap-4">
            <div class="text-blue font-semibold text-xl">
                Meal Name x 4
            </div>

            <div>
                <v-chip size="large" color="blue">LARGE</v-chip>
            </div>

            <!-- <div class="flex items-center justify-between">
                <div class="text-blue-500">
                    size: <span class="text-xl">Large</span>
                </div>


                <div class="">
                    Qtn: <span>5</span>
                </div>
            </div> -->

            <!-- <div class="text-sm text-blue-500">Lorem ipsum dolor sit amet consectetur, dolore? Cupiditate deleniti enim</div> -->
        </div>

    </div>
</template>

<script setup lang="ts">
defineProps<{
    meal: Meal
}>()
</script>

<style scoped>
.bg-icon {
    position: absolute;
    right: 2rem;
    top: .25rem;
    font-size: 5rem;
    z-index: 1;
    color: #2195f34b
}
</style>