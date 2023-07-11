import { User } from '../../../../modules/auth';
import { Button, Link, Wrapper } from '../../../../modules/ui';

type HeaderProps = {
  user?: User;
};

export default ({ user }: HeaderProps) => {
  const authProps = Wrapper({
    content: (user
      ? [
          Wrapper({
            content: user.name,
            element: 'span',
            style: 'border-right: 1px solid black; padding-right: 4px;',
          }),
          Button({
            action: '/auth/logout',
            method: 'post',
            label: 'Logout!',
          }),
        ]
      : [
          Link({
            href: '/auth/login',
            text: 'Login',
            style: 'color: black;',
          }),
        ]
    ).join(''),
    style: 'display: flex; gap: 4px',
  });

  const logo = Wrapper({
    content: 'The Greeter App',
    style: 'font-size: 20px; font-weight: bold;',
  });

  return Wrapper({
    content: logo + authProps,
    element: 'div',
    style:
      'display: flex; background: #E9ECF1; justify-content: space-between; align-items: center; padding: 6px; margin-bottom: 12px;',
  });
};
