import Wrapper from "./Wrapper";

type ButtonProps = {
  label: string;
};

export default ({ label }: ButtonProps) =>
  Wrapper({
    element: "span",
    content: `<button type="submit">${label}</button>`,
  });
