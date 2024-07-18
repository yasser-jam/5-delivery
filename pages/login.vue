<template>
  <Form v-slot="{ errors }" class="mt-8 w-full" @submit="submit">
    <div>
      <div class="text-base font-semibold">Email</div>

      <Field
        v-model="user.email"
        rules="required|email"
        name="email"
        v-slot="{ field }"
      >
        <v-text-field
          v-bind="field"
          placeholder="admin@gmail.com"
          :error-messages="errors.email"
        ></v-text-field>
      </Field>
    </div>

    <div class="mt-4">
      <div class="text-base font-semibold">Password</div>

      <Field
        v-model="user.password"
        rules="required"
        name="password"
        v-slot="{ field }"
      >
        <v-text-field
          v-bind="field"
          placeholder="********"
          type="password"
          :error-messages="errors.password"
        ></v-text-field>
      </Field>
    </div>

    <div class="flex justify-center">
      <v-btn
        type="submit"
        color="primary"
        class="text-white"
        size="large"
        :loading
        >Login</v-btn
      >
    </div>
  </Form>
</template>

<script setup lang="ts">
import { required, email } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';

defineRule('required', required)
defineRule('email', email)

definePageMeta({
  layout: 'auth',
});

const loading = ref<boolean>(false);

const authStore = useAuthStore();

const user = ref({
  email: '',
  password: '',
});

const submit = async () => {
  loading.value = true;

  try {
    await authStore.login(user.value);

    navigateTo('/drivers');
  } finally {
    loading.value = false;
  }
};
</script>
