import { Input } from '../../../../ui';

const emailInput = Input({
  name: 'email',
  type: 'text',
  id: 'email',
  placeHolder: 'Enter your email',
  required: true,
  label: 'Email',
});
const passwordInput = Input({
  name: 'password',
  type: 'password',
  id: 'password',
  placeHolder: 'Enter your password',
  required: true,
  label: 'Password',
});

export default [emailInput, passwordInput];
