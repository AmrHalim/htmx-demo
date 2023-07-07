import { Heading, PageContent } from 'src/modules/ui';

import page, { PageContext } from '../../template/page';

export const render = ({ user }: PageContext) =>
  page({
    title: 'Not Found!',
    content: PageContent({
      content: Heading({
        label: 'Page Not Found!',
      }),
    }),
    context: { user },
  });
