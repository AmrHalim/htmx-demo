import PageContent from '../../../ui/PageContent';

import page from '../../template/page';
import LoginForm from './sections/LoginForm';
import RegisterForm from './sections/RegisterForm';

export const renderLogin = () =>
  page({
    title: 'The App | Login',
    content: PageContent({
      content: LoginForm,
    }),
  });
export const renderRegister = () =>
  page({
    title: 'The App | Register',
    content: PageContent({
      content: RegisterForm,
    }),
  });

export { default as formErrors } from './sections/FormErrors';
