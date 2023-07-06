type LinkProps = {
  href: string;
  text: string;
  style?: string;
};

export default ({ href, text, style }: LinkProps) => {
  return `<a style="${style}" href="${href}">${text}</a>`;
};
