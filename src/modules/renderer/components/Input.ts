import Wrapper from "./Wrapper";
import { renderProp } from "./helpers";

type InputType = "text" | "number" | "email" | "submit";
type InputProps = {
  id?: string;
  required?: boolean;
  name: string;
  type: InputType;
  placeHolder?: string;
  label: string;
  validator?: {
    path: string;
    trigger: "change" | "blur";
    target?: string;
  };
};

export default ({
  name,
  type,
  id,
  label,
  required = false,
  placeHolder,
  validator,
}: InputProps) => {
  const idProp = renderProp({
    name: "id",
    value: id,
  });
  const placeHolderProp = renderProp({
    name: "placeholder",
    value: placeHolder,
  });
  const requiredProp = required ? 'required="required"' : "";

  const { path, trigger, target } = validator ?? {};
  const validationProps = validator
    ? `${renderProp({
        name: "hx-post",
        value: path,
      })} ${renderProp({
        name: "hx-trigger",
        value: trigger,
      })} hx-sync="closest form:abort" hx-target=${target}`
    : "";

  const fieldLabel = Wrapper({
    element: "label",
    content: label,
    style: "padding-right: 4px;",
  });

  return Wrapper({
    content: `${fieldLabel}<input ${idProp} name="${name}" type="${type}" ${placeHolderProp} ${requiredProp} ${validationProps} />`,
    element: "span",
    style: "padding: 4px;",
  });
};
