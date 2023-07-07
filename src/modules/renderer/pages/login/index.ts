import PageContent from 'src/modules/ui/PageContent';

import page from '../../template/page';
import LoginForm from './sections/LoginForm';

export const render = () =>
  page({
    title: 'The Greeter App | Login',
    content: PageContent({
      content: LoginForm,
    }),
  });

export { default as loginFormErrors } from './sections/LoginFormErrors';
