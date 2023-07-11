import { User, users } from '../../../../../modules/auth';
import { Heading, Rows, Wrapper } from '../../../../../modules/ui';
import Toast from '../../../../../modules/ui/Toast';

export default (user?: User) => {
  const { token } = user ?? {};
  if (token) {
    const otherUsers = users.filter((_user) => _user.token !== token);
    return Wrapper({
      id: 'currentUsers',
      paddingTop: 'gutter',
      width: 'full',
      children: [
        Heading({
          label: 'Current Active Users',
          level: 'h3',
        }),
        Rows({
          rows: otherUsers.map((_user) => _user.name),
          space: 'small',
          id: 'users-list',
        }),
      ],
    });
  }
  return '';
};
