import Wrapper from "./Wrapper";

export type FormValidationProps = {
  errors: string[];
};
export default ({ errors }: FormValidationProps) => {
  const hasErrors = errors.length > 0;
  const renderErrors = errors
    .map((error) =>
      Wrapper({
        content: error,
        element: "span",
      })
    )
    .join();

  return hasErrors
    ? Wrapper({
        content: renderErrors,
        element: "div",
      })
    : "";
};
