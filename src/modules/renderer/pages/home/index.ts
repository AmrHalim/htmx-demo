import { PageContent } from '../../../../modules/ui';

import page, { PageContext } from '../../template/page';
import WelcomeHeader from './sections/WelcomeHeader';
import GreetAlert from './sections/GreetAlert';

export const render = ({ user }: PageContext) => {
  const GreetUser = user ? GreetAlert(user) : '';

  return page({
    title: 'The Greeter App!',
    content: PageContent({
      content: `${WelcomeHeader}${GreetUser}`,
    }),
    context: { user },
  });
};

export { default as GreetAlert } from './sections/GreetAlert';
