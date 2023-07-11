import { User, users } from '../../../../../modules/auth';
import { Heading, Input, Rows, Wrapper } from '../../../../../modules/ui';
import Toast from '../../../../../modules/ui/Toast';

export default (user?: User, showLive?: boolean) => {
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
        Input({
          type: 'checkbox',
          label: 'Live users?',
          name: 'live',
          value: showLive ? 'on' : '',
          id: 'live',
          event: {
            action: '/users',
            method: 'post',
            on: 'click',
            target: 'currentUsers',
            swap: 'outerHTML',
          },
        }),
        Rows({
          rows: otherUsers.map((_user) => _user.name),
          space: 'small',
          id: 'users-list',
        }),
      ],
      trigger: showLive
        ? {
            event: 'load',
            method: 'post',
            path: '/users',
            swap: 'outerHTML',
            delay: 5,
            include: [{ $: 'name', target: 'live' }],
          }
        : undefined,
    });
  }
  return '';
};
