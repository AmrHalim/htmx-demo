import { Wrapper } from ".";

type AlertProps = {
  title: string;
};

export default ({ title }: AlertProps) =>
  Wrapper({
    content: title,
    element: "span",
  });
