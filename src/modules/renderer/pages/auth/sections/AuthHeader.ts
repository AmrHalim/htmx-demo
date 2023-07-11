import { Alert, Heading, Wrapper } from '../../../../../modules/ui';

export default ({ body, header }: { header: string; body: string }) =>
  Wrapper({
    gap: 'small',
    flexDirection: 'column',
    display: 'flex',
    paddingBottom: 'xxxlarge',
    children: [
      Heading({
        label: header,
        level: 'h2',
      }),
      Alert({
        title: body,
      }),
    ],
  });
