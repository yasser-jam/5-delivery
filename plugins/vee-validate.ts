import { defineRule, Form, Field, configure } from 'vee-validate';
import { required, email, min, numeric, is } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

export default defineNuxtPlugin((nuxtApp) => {
  // Register rules globally
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
  defineRule('numeric', numeric);
  defineRule('is', is);

  configure({
    // Generates an English message locale generator
    generateMessage: localize('en', {
      messages: {
        required: 'This field is required',
        min: 'At least 0:{min} digits',
        is: 'Confirm Password must be like Password'
      },
    }),
  });
  // Register components globally
  nuxtApp.vueApp.component('Form', Form);
  nuxtApp.vueApp.component('Field', Field);
});
