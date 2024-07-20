<template>
    <div class="flex justify-between items-center w-full rounded-lg my-8">
    <div class="">
        <h1 class="text-3xl font-semibold text-primary mb-2">{{ title }}</h1>

        <div class="text-gray-500 text-sm">
          {{ subtitle }}
        </div>
      </div>
      <v-btn
      v-if="btnTitle"
        prepend-icon="mdi-plus"
        color="#FFA800"
        variant="tonal"
        :to="btnLink"
      >
        {{ btnTitle }}
      </v-btn>


</div>

</template>

<script setup lang="ts">
defineProps<{
    title: string,
    subtitle?: string
    btnLink?: string
    btnTitle?: string
}>()
</script>