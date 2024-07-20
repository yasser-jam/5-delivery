<template>
  <v-timeline direction="horizontal" line-inset="12" dot-color="grey">
    <v-timeline-item dot-color="success" icon="mdi-check">
      <template v-slot:opposite>
        <div class="text-success">Perpared</div>
      </template>
    </v-timeline-item>

    <v-timeline-item dot-color="blue">
        <div class="text-blue">Ready to go</div>
    </v-timeline-item>

    <v-timeline-item>

      <template v-slot:opposite>
        <div class="text-gray-500">Done</div>
      </template>
    </v-timeline-item>
  </v-timeline>
</template>
