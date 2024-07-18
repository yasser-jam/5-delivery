import { defineRule } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

// Register rules globally
defineRule('required', required);
defineRule('email', email);

console.log('hello test');