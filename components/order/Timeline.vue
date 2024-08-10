<template>
  <v-timeline direction="horizontal" line-inset="12" dot-color="grey">
    <template v-for="(step, index) in steps">
      <v-timeline-item
        v-if="index % 2 == 0"
        :dot-color="
          step.order == activeStep
            ? step.status == 'done' ? 'success' : 'blue'
            : step.order < activeStep
            ? 'success'
            : 'grey'
        "
        :icon="
          step.order == activeStep
            ? step.status == 'done' ? 'mdi-check' : ''
            : step.order < activeStep
            ? 'mdi-check'
            : ''
        "
      >
        <template v-slot:opposite>
          <div
            :class="
              step.order == activeStep
                ? step.status == 'done' ? 'text-success' : 'text-blue'
                : step.order < activeStep
                ? 'text-success'
                : 'text-grey'
            "
          >
            {{ step.title }}
          </div>
        </template>
      </v-timeline-item>

      <v-timeline-item
        v-else
        :dot-color="
          step.order == activeStep
            ? 'blue'
            : step.order < activeStep
            ? 'success'
            : 'grey'
        "
        :icon="
          step.order == activeStep
            ? ''
            : step.order < activeStep
            ? 'mdi-check'
            : ''
        "
      >
        <div
          :class="
            step.order == activeStep
              ? 'text-blue'
              : step.order < activeStep
              ? 'text-success'
              : 'text-grey'
          "
        >
          {{ step.title }}
        </div>
      </v-timeline-item>
    </template>
  </v-timeline>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: 'ready' | 'assigned' | 'on-way' | 'done';
}>();

const steps = ref([
  {
    order: 1,
    status: 'prepared',
    title: 'Prepared',
  },
  {
    order: 2,
    status: 'ready',
    title: 'Ready',
  },
  {
    order: 3,
    status: 'assigned',
    title: 'Assign',
  },
  {
    order: 4,
    status: 'on-way',
    title: 'On Way',
  },
  {
    order: 5,
    status: 'done',
    title: 'Done',
  },
]);

const activeStep = computed(
  () => steps.value.find((step) => step.status == props.status)?.order || 0
);

// const steps = computed(() => {
//   switch (props.status) {
//     case 'ready':
//       return {
//         ready: true,
//         assign: false,
//         onWay: false,
//       };

//     case 'assigned':
//       return {
//         ready: true,
//         assign: true,
//         onWay: false,
//       };

//     case 'on-way':
//       return {
//         ready: true,
//         assign: true,
//         onWay: true,
//       };
//   }
// });
</script>
