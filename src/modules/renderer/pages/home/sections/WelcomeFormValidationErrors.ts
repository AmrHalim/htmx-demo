import { Rows } from "../../../components";

type WelcomeFormValidationErrorsProps = {
  errors: string[];
};

export default ({ errors }: WelcomeFormValidationErrorsProps) =>
  Rows({
    rows: errors,
  });
