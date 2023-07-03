import Wrapper from "./Wrapper";
import { Method } from "./types";

type FormProps = {
  action: string;
  content?: string;
  id?: string;
  method?: Method;
  reserveValidationWrapper?: boolean;
};

export default ({
  action,
  content = "",
  id = "",
  method = "post",
  reserveValidationWrapper = false,
}: FormProps) => {
  const validationWrapper = reserveValidationWrapper
    ? Wrapper({
        content: "",
        element: "span",
        id: `errors-${id}`,
        style: "color: red;",
      })
    : "";

  return `<form id="${id}" hx-${method}="${action}">
    ${Wrapper({
      element: "div",
      style:
        "display: flex; flex-direction: column; align-items: center; justify-content: center;",
      content: content + validationWrapper,
    })} 
  </form>`;
};
