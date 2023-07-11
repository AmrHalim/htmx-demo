import { User } from '../../../../modules/auth';
import { Button, Link, Wrapper } from '../../../../modules/ui';

type HeaderProps = {
  user?: User;
};

export default ({ user }: HeaderProps) => {
  const authProps = Wrapper({
    display: 'flex',
    gap: 'xsmall',
    alignItems: 'center',
    children: user
      ? [
          Wrapper({
            content: user.name,
            borderRightWidth: 'xxxsmall',
            borderRightStyle: 'solid',
            borderRightColor: 'neutral',
            paddingRight: 'gutter',
          }),
          Button({
            action: '/auth/logout',
            method: 'post',
            label: 'Logout',
            tone: 'critical',
          }),
        ]
      : [
          Link({
            href: '/auth/login',
            text: 'Login',
            tone: 'primary',
            fontSize: 'medium',
            weight: 'bold',
          }),
        ],
  });

  const logo = Wrapper({
    content: Link({
      text: 'The App',
      href: '/',
      tone: 'primary',
      fontSize: 'large',
      weight: 'bold',
    }),
    fontSize: 'large',
    fontWeight: 'bold',
  });

  return Wrapper({
    display: 'flex',
    background: 'secondary',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
    padding: 'small',
    marginBottom: 'medium',
    children: [logo, authProps],
  });
};
