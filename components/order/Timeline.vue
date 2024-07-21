<template>
  <v-timeline direction="horizontal" line-inset="12" dot-color="grey">
    <v-timeline-item dot-color="success" icon="mdi-check">
      <template v-slot:opposite>
        <div class="text-success">Perpared</div>
      </template>
    </v-timeline-item>

    <v-timeline-item :icon="status == 'assigned' ? 'mdi-check' : ''" :dot-color="status == 'ready' ? 'blue' : 'success'">
      <div :class="status == 'ready' ? 'text-blue' : 'text-success'">
        Ready to go
      </div>
    </v-timeline-item>

    <v-timeline-item :icon="status == 'ready' ? 'mdi-check' : ''" :dot-color="status == 'assigned' ? 'blue' : 'success'">
      <template v-slot:opposite>
        <div :class="status == 'assigned' ? 'text-blue' : 'text-success'">
          On way
        </div>
      </template>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        <div class="text-gray-500">Done</div>
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: 'ready' | 'assigned';
}>();

</script>
