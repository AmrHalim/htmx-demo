import { WrapperProps } from './Wrapper';

type LinkProps = Pick<WrapperProps, 'style'> & {
  href: string;
  text: string;
};

export default ({ href, text, style }: LinkProps) => `<a style="${style}" href="${href}">${text}</a>`;
