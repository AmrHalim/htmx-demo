import Wrapper, { WrapperProps } from './Wrapper';

export default ({ content }: Pick<WrapperProps, 'content'>) =>
  Wrapper({
    content,
    classNames: ['page'],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
