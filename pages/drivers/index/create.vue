<template>
    <base-page-dialog :model-value="true">

        <template #title>Create Driver</template>

        <template #body>
            <v-row>
                <v-col cols="12">
                    <div class="text-sm text-gray-900">Name</div>
                    <v-text-field density="compact" placeholder="Driver Name"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <div class="text-sm text-gray-900">Email</div>
                    <v-text-field density="compact" type="email" placeholder="driver@test.com"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <div class="text-sm text-gray-900">Phone Number</div>
                    <v-text-field density="compact" placeholder="09xxxxxxxx"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <div class="text-sm text-gray-900">Password</div>
                    <v-text-field density="compact" type="password" placeholder="********"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <div class="text-sm text-gray-900">Confirm Password</div>
                    <v-text-field density="compact" type="password" placeholder="********"></v-text-field>
                </v-col>
            </v-row>

            <div class="flex justify-end gap-2">
                <v-btn variant="text" color="grey">Close</v-btn>
                <v-btn  color="secondary">Save</v-btn>
            </div>
        </template>

    </base-page-dialog>
</template>

<script setup lang="ts">

</script>