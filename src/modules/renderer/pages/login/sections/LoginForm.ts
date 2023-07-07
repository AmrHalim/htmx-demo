import { Form, Input } from 'src/modules/ui';

const FORM_ID = 'login_form';

const emailInput = Input({
  name: 'email',
  type: 'text',
  id: 'email',
  placeHolder: 'Enter your email.',
  required: true,
  label: 'Email',
});
const passwordInput = Input({
  name: 'password',
  type: 'password',
  id: 'password',
  placeHolder: 'Enter your password.',
  required: true,
  label: 'Password',
});

export default Form({
  id: FORM_ID,
  action: '/auth/login',
  children: [emailInput, passwordInput],
  reserveValidationWrapper: true,
  submitLabel: 'Login!',
});
