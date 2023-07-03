type Prop = {
  name: string;
  value?: string;
};

export const renderProp = ({ name, value }: Prop) => {
  if (value) {
    return `${name}="${value}"`;
  }
  return "";
};

export const renderProps = (props: Prop[]) => {
  const propsToRender = props.map((prop) => renderProp(prop));
  return propsToRender?.length ? propsToRender.join(" ") : "";
};
