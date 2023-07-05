import { Rows } from "src/modules/ui";

type LoginFormErrorsProps = {
  errors: string[];
};

export default ({ errors }: LoginFormErrorsProps) =>
  Rows({
    rows: errors,
  });
