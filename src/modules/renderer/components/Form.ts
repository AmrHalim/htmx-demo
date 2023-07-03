import Wrapper from "./Wrapper";
import { Method } from "./types";

type FormProps = {
  action: string;
  content?: string;
  id?: string;
  method?: Method;
  reserveValidationWrapper?: boolean;
};

export const makeValidationWrapper = ({ target }: { target: string }) => {
  const id = `errors-${target}`;
  return {
    element: Wrapper({
      content: "",
      element: "span",
      id,
      style: "color: red; font-size: 12px;",
    }),
    id,
  };
};

export default ({
  action,
  content = "",
  id = "",
  method = "post",
  reserveValidationWrapper = false,
}: FormProps) => {
  const validationWrapper = reserveValidationWrapper
    ? makeValidationWrapper({ target: id }).element
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
