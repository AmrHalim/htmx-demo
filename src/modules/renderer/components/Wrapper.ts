import { renderProp } from "./helpers";

type WrapperProps = {
  id?: string;
  element?: "div" | "span" | "ul" | "li" | "label";
  content: string;
  style?: string;
};

export default ({ id, content, element = "div", style }: WrapperProps) =>
  `<${element} ${renderProp({
    name: "id",
    value: id,
  })} ${renderProp({
    name: "style",
    value: style,
  })}>${content}</${element}>`;
