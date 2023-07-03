import { renderProps } from "./helpers";

type WrapperProps = {
  id?: string;
  element?: "div" | "span" | "ul" | "li" | "label";
  content: string;
  style?: string;
};

export default ({ id, content, element = "div", style }: WrapperProps) =>
  `<${element} ${renderProps([
    {
      name: "id",
      value: id,
    },
    { name: "style", value: style },
  ])}>${content}</${element}>`;
