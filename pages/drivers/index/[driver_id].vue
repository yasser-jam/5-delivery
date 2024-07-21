<template>
  <base-page-dialog :loading="pending" :model-value="true" @close="navigateTo('/drivers')">
    <template #title>Create Driver</template>

    <template #body>
      <Form @submit="submit" v-slot="{ errors }">
        <v-row>
          <v-col cols="12" class="pb-0">
            <div class="text-sm text-gray-900">Name</div>
            <Field
              v-model="driver.name"
              name="name"
              rules="required"
              v-slot="{ field }"
            >
              <v-text-field
                v-bind="field"
                density="compact"
                placeholder="Driver Name"
                :error-messages="errors.name"
              ></v-text-field>
            </Field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <div class="text-sm text-gray-900">Email</div>
            <Field
              v-model="driver.email"
              name="email"
              rules="required|email"
              v-slot="{ field }"
            >
              <v-text-field
                v-bind="field"
                density="compact"
                placeholder="Driver Email"
                :error-messages="errors.email"
              ></v-text-field>
            </Field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <div class="text-sm text-gray-900">Phone Number</div>
            <Field
              v-model="driver.phone"
              name="phone"
              rules="required|min:10|numeric"
              v-slot="{ field }"
            >
              <v-text-field
                v-bind="field"
                density="compact"
                type="number"
                placeholder="09xxxxxxxx"
                :error-messages="errors.phone"
              ></v-text-field>
            </Field>
          </v-col>

          <v-col v-if="!editMode" cols="12" md="6" class="pb-0">
            <div class="text-sm text-gray-900">Password</div>
            <Field
              v-model="driver.password"
              name="password"
              rules="required"
              v-slot="{ field }"
            >
              <v-text-field
                v-bind="field"
                density="compact"
                type="password"
                placeholder="********"
                :error-messages="errors.name"
              ></v-text-field>
            </Field>
          </v-col>

          <v-col v-if="!editMode" cols="12" md="6" class="pb-0">
            <div class="text-sm text-gray-900">Confirm Password</div>
            <Field
              v-model="driver.password_confirmation"
              name="password_confirmation"
              :rules="{ required: true, is: driver.password }"
              v-slot="{ field }"
            >
              <v-text-field
                v-bind="field"
                density="compact"
                type="password"
                placeholder="********"
                :error-messages="errors.password_confirmation"
              ></v-text-field>
            </Field>
          </v-col>
        </v-row>

        <div class="flex justify-end gap-2 mt-4">
          <v-btn variant="text" color="grey" @click="navigateTo('/drivers')">Close</v-btn>
          <v-btn color="secondary" type="submit" :loading>Save</v-btn>
        </div>
      </Form>
    </template>
  </base-page-dialog>
</template>

<script setup lang="ts">
import { required, email } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';

defineRule('required', required);
defineRule('email', email);

const route = useRoute()

const driverStore = useDriverStore();

const { driver } = storeToRefs(driverStore);

const loading = ref<boolean>(false);

const driverId = route.params.driver_id
const editMode = driverId != 'create'

const { pending } = useLazyAsyncData<Driver>(() => {
  if (editMode) {
    return driverStore.get(Number(driverId))
  }

  // reset
  driverStore.reset()

  return Promise.resolve({} as Driver)
})


const submit = async () => {
  loading.value = true;

  try {
    
    if (editMode) await driverStore.update(Number(driverId))
    
    else await driverStore.create();

  } finally {
    loading.value = false;

    navigateTo('/drivers')
  }
};
</script>
