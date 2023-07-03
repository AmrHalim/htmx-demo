import FormButton from "./FormButton";
import Wrapper from "./Wrapper";
import { renderProps } from "./helpers";
import { Method } from "./types";

type FormProps = {
  action: string;
  children?: string[];
  id?: string;
  method?: Method;
  reserveValidationWrapper?: boolean;
  submitLabel?: string;
  validationWrapper?: ValidationWrapper;
};

type ValidationWrapper = {
  id: string;
  element: string;
};
export const makeValidationWrapper = ({
  target,
}: {
  target: string;
}): ValidationWrapper => {
  const id = `errors-${target}`;
  return {
    element: Wrapper({
      content: "",
      id,
      style: "color: red; font-size: 12px;",
    }),
    id,
  };
};

export default ({
  action,
  children = [],
  id = "",
  method = "post",
  reserveValidationWrapper = false,
  submitLabel,
  validationWrapper,
}: FormProps) => {
  const { element: validation, id: validationId } =
    reserveValidationWrapper && !validationWrapper
      ? makeValidationWrapper({ target: id })
      : validationWrapper ?? { element: "", id: "" };

  const submitButton = submitLabel
    ? FormButton({
        label: submitLabel,
      })
    : "";

  const formProps = renderProps([
    {
      name: "hx-target",
      value: validationId,
      prefix: "#",
    },
    {
      name: "id",
      value: id,
    },
    {
      name: `hx-${method}`,
      value: action,
    },
  ]);

  return `<form ${formProps}>
    ${Wrapper({
      element: "div",
      style:
        "display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap:4px;",
      content: children.join("") + validation + submitButton,
    })} 
  </form>`;
};
