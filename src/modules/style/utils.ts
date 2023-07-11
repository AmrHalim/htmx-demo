export const createClassNameProp = <T>(prop: string, value: T) => `${prop}-${value}`;

export const createClassNameStyle = <T extends Record<string, string>>({
  prop,
  useKey = true,
  values,
}: {
  prop: string;
  useKey?: boolean;
  values: T;
}) =>
  Object.entries(values)
    .map(([key, value]) => `.${prop}-${useKey ? key : value} { ${prop}: ${value}; }`)
    .join('\n');
