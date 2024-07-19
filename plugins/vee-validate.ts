import { defineRule, Form, Field } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

export default defineNuxtPlugin(nuxtApp => {
    // Register rules globally
    defineRule('required', required);
    defineRule('email', email);

    // Register components globally
    nuxtApp.vueApp.component('Form', Form)
    nuxtApp.vueApp.component('Field', Field)
  })
