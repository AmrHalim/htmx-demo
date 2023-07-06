import Wrapper, { WrapperProps } from "./Wrapper";

export default ({ content }: Pick<WrapperProps, "content">) =>
  Wrapper({
    content,
    style:
      "display: flex; flex-direction: column; justify-content: center; align-items: center;",
  });
