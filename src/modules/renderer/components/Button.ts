import { renderProp } from "./helpers";
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
  const methodProp = renderProp({ name: `hx-${method}`, value: action });
  const swapProp = renderProp({ name: `hx-swap`, value: swap });
  const targetProp = renderProp({ name: `hx-target`, value: target });

  return `<button ${methodProp} ${swapProp} ${targetProp}>${label}</button>`;
};
