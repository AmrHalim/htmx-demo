import { Rows, Wrapper } from '../../../../../modules/ui';

const DisplayProp = (prop: Record<string, string>) =>
  Object.entries(prop)
    .map(([key, val]) =>
      Wrapper({
        content: `${key}: ${val}`,
      }),
    )
    .join('');

export default ({ name, email }: { name: string; email: string }) =>
  Wrapper({
    content: Rows({
      rows: [DisplayProp({ name }), DisplayProp({ email })],
      space: 'medium',
    }),
  });
