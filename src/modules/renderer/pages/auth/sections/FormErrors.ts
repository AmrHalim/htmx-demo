import { Rows } from '../../../../ui';

type FormErrorsProps = {
  errors: string[];
};

export default ({ errors }: FormErrorsProps) =>
  Rows({
    rows: errors,
    space: 'small',
  });
