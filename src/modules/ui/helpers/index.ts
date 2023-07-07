type Prop = {
  name: string;
  value?: string;
  prefix?: string;
};

export const renderProp = ({ name, value, prefix = '' }: Prop) => {
  if (value) {
    return `${name}="${prefix}${value}"`;
  }
  return '';
};

export const renderProps = (props: Prop[]) => {
  const propsToRender = props.map((prop) => renderProp(prop));
  return propsToRender?.length ? propsToRender.join(' ') : '';
};
