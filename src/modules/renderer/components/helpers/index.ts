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
