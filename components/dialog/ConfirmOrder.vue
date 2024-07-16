<template>
  <v-dialog width="600">
    <v-card class="py-4 px-4">
      <div class="flex flex-col items-center justify-center gap-2">
        <v-icon color="secondary" size="3rem">mdi-information</v-icon>
        <div class="text-xl font-semibold text-">Order Confirmation</div>
      </div>

      <div class="flex justify-center items-center my-8">

        <div class="p-4 bg-blue-50 text-blue rounded-lg w-48">
          <div class="flex flex-col justify-center gap-2 items-center">
            <v-avatar
              icon="mdi-moped"
              color="blue"
            ></v-avatar>
            <div>Yasser JAmal aldeen</div>
          </div>
        </div>

        <v-icon class="mx-4" color="secondary" size="large"
          >mdi-arrow-right-bold-outline</v-icon
        >

        <div class="p-4 bg-amber-50 text-primary rounded-lg w-48">
          <div class="flex flex-col justify-center gap-2 items-center">
            <v-avatar
              icon="mdi-package"
              color="primary"
              class="text-white"
            ></v-avatar>
            <div>#1</div>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-2">
        <v-btn
          variant="text"
          color="gray"
          @click="$emit('update:model-value', false)"
          >Close</v-btn
        >
        <v-btn  color="secondary">Save</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
