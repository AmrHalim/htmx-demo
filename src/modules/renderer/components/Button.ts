import { renderProps } from "./helpers";
import { Method } from "./types";

type ButtonProps = {
  label: string;
  method?: Method;
  action: string;
  swap?: string;
  target?: string;
};

export default ({
  label,
  method = "get",
  action,
  swap,
  target,
}: ButtonProps) => {
  const buttonProps = renderProps([
    { name: `hx-${method}`, value: action },
    { name: `hx-swap`, value: swap },
    { name: `hx-target`, value: target },
  ]);

  return `<button ${buttonProps}>${label}</button>`;
};
