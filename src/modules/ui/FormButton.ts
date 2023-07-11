import Wrapper, { loadStyles } from './Wrapper';

type ButtonProps = {
  label: string;
};

export default ({ label }: ButtonProps) =>
  Wrapper({
    element: 'span',
    content: `<button class="${loadStyles({
      background: 'primary',
      fontSize: 'medium',
      border: 'unset',
      padding: 'gutter',
      borderRadius: 'xsmall',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: 'white',
      width: 'full',
    })}" type="submit">${label}</button>`,
    width: 'full',
  });
