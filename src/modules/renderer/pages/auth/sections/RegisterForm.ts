import { Form, Input, Wrapper } from '../../../../ui';
import fields from '../utils/fields';
import AlternateLink from './AlternateLink';
import AuthHeader from './AuthHeader';

const FORM_ID = 'register_form';

const nameInput = Input({
  name: 'name',
  type: 'text',
  id: 'name',
  placeHolder: 'Enter your name',
  required: true,
  label: 'Name',
});

export default Wrapper({
  display: 'flex',
  flexDirection: 'column',
  width: 'full',
  children: [
    AuthHeader({
      header: 'Register',
      body: 'Register to start using the system.',
    }),
    Form({
      id: FORM_ID,
      action: '/auth/register',
      children: [nameInput].concat(fields),
      reserveValidationWrapper: true,
      submitLabel: 'Register',
    }),
    AlternateLink('login'),
  ],
});
