import { Link, Wrapper } from '../../../../../modules/ui';

type Mode = 'login' | 'register';

export default (mode: Mode) =>
  Wrapper({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'xxsmall',
    children: [
      Wrapper({
        content: mode === 'login' ? 'Already a user?' : 'New user?',
      }),
      orLink(mode),
    ],
  });

const orLink = (mode: Mode) =>
  Link({
    href: mode === 'login' ? '/auth/login' : '/auth/register',
    text: mode === 'login' ? 'Login' : 'Register',
    size: 'gutter',
    tone: 'primary',
  });
