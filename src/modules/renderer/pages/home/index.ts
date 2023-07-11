import { PageContent, Wrapper } from '../../../../modules/ui';

import page, { PageContext } from '../../template/page';
import WelcomeHeader from './sections/WelcomeHeader';
import GreetAlert from './sections/GreetAlert';
import CurrentUsers from './sections/CurrentUsers';

export const render = ({ user }: PageContext) => {
  const GreetUser = user ? GreetAlert(user) : '';

  const Home = Wrapper({
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
    alignItems: 'flexStart',
    justifyContent: 'left',
    children: [WelcomeHeader, GreetUser, CurrentUsers(user)],
  });

  return page({
    title: 'The App!',
    content: PageContent({
      content: Home,
    }),
    context: { user },
  });
};

export { default as GreetAlert } from './sections/GreetAlert';
export { default as currentUsers } from './sections/CurrentUsers';
