<template>
    <base-page-dialog :model-value="true" @close="navigateTo('/orders')">

        <template #title>Order Details</template>
        
        <template #body>
            <v-row>
                <v-col cols="6">
                    <div class="flex items-center gap-2">
                        <div class="font-semibold">Order ID</div>
                        <v-chip color="secondary">#1</v-chip>
                    </div>
                </v-col>

                <v-col cols="6">
                    <div class="flex items-center gap-2">
                        <div class="font-semibold">Driver Name</div>
                        <v-chip color="secondary">Yasser Jamal Aldeen</v-chip>
                    </div>
                </v-col>

                <v-col class="mt-4">
                    <div class="font-semibold">Driver Current Position</div>

                    <div class="w-full">
                        <iframe :src = "`https://maps.google.com/maps?q=36,${lat}&hl=es;z=25&amp;output=embed`" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13304.755359898563!2d36.28535544678928!3d33.52247554967195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7303c56f007%3A0x24e5c252433c695a!2sAbu%20Shaker!5e0!3m2!1sen!2s!4v1721201809329!5m2!1sen!2s" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                    </div>
                </v-col>
            </v-row>
        </template>

    </base-page-dialog>
</template>

<script setup lang="ts">
const lat = ref(37.102)

onMounted(() => {
    // setInterval(() => {
    //     lat.value += 0.001
    // }, 2000)
})
</script>