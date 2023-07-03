import { Rows } from "../../../components";

type LoginFormErrorsProps = {
  errors: string[];
};

export default ({ errors }: LoginFormErrorsProps) =>
  Rows({
    rows: errors,
  });
