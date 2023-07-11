import { Form, Wrapper } from '../../../../ui';
import fields from '../utils/fields';
import AlternateLink from './AlternateLink';
import AuthHeader from './AuthHeader';

const FORM_ID = 'login_form';

export default Wrapper({
  display: 'flex',
  flexDirection: 'column',
  width: 'full',
  children: [
    AuthHeader({
      header: 'Login',
      body: 'Login to start using the system.',
    }),
    Form({
      id: FORM_ID,
      action: '/auth/login',
      children: fields,
      reserveValidationWrapper: true,
      submitLabel: 'Login',
    }),
    AlternateLink('register'),
  ],
});
