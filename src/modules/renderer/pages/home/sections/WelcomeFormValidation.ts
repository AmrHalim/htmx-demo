import { FormValidation } from "../../../components";
import { FormValidationProps } from "../../../components/FormValidation";

export default ({ errors }: FormValidationProps) =>
  FormValidation({
    errors,
  });
