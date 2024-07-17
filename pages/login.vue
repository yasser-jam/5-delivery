<template>
  <div class="mt-8 w-full">
    <div>
      <div class="text-base font-semibold">Email</div>

      <v-text-field v-model="user.email" placeholder="admin@gmail.com"></v-text-field>
    </div>

    <div class="mt-2">
      <div class="text-base font-semibold">Password</div>

      <v-text-field v-model="user.password" placeholder="********"></v-text-field>
    </div>

    <div class="flex justify-center">
        <v-btn color="primary" class="text-white" size="large" :loading @click="login">Login</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
});

const loading = ref<boolean>(false)

const authStore = useAuthStore()

const user = ref({   
    email: '',
    password: ''
})

const login = async () => {
    loading.value = true
    
    try {
        await authStore.login(user.value)

        navigateTo('/drivers')
    } finally {
        loading.value = false
    }
}
</script>
