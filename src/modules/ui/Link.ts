import { FontSize, FontWeight, Size, TextDecoration } from '../style/types';
import { createClassNameProp } from '../style/utils';
import { loadStyles } from './Wrapper';
import { renderProps } from './helpers';

type LinkProps = {
  href: string;
  text: string;
  tone?: 'primary' | 'secondary';
  weight?: FontWeight;
  size?: Size;
  fontSize?: FontSize;
  textDecoration?: TextDecoration;
};

export default ({
  href,
  text,
  tone,
  size = 'gutter',
  textDecoration = 'none',
  fontSize = 'medium',
  weight = 'normal',
}: LinkProps) => {
  const classNames = [
    loadStyles({
      padding: size,
      color: tone === 'primary' ? 'primary' : 'secondary',
      fontSize,
      fontWeight: weight,
    }),
    textDecoration && createClassNameProp('text-decoration', textDecoration),
  ];
  const linkProps = renderProps([
    { name: 'href', value: href },
    { name: 'class', value: classNames.length ? classNames.join(' ') : '' },
  ]);

  return `<a${linkProps}>${text}</a>`;
};
