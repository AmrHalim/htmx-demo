import Wrapper from './Wrapper';
import { renderProps } from './helpers';

type InputType = 'text' | 'number' | 'email' | 'submit' | 'password';
type InputProps = {
  id?: string;
  required?: boolean;
  name: string;
  type: InputType;
  placeHolder?: string;
  label: string;
  validator?: {
    path: string;
    trigger: 'change' | 'blur';
    target?: string;
  };
};

export default ({ name, type, id, label, required = false, placeHolder, validator }: InputProps) => {
  const inputProps = renderProps([
    { name: 'id', value: id },
    {
      name: 'placeholder',
      value: placeHolder,
    },
    {
      name: 'required',
      value: required ? 'required' : '',
    },
    {
      name: 'name',
      value: name,
    },
    {
      name: 'type',
      value: type,
    },
  ]);

  const { path, trigger, target } = validator ?? {};
  const validationProps = validator
    ? renderProps([
        {
          name: 'hx-post',
          value: path,
        },
        { name: 'hx-trigger', value: trigger },
        { name: 'hx-target', value: target },
        { name: 'hx-sync', value: 'closest form:abort' },
      ])
    : '';

  const fieldLabel = label
    ? Wrapper({
        element: 'label',
        content: label,
        style: 'padding-right: 4px;',
      })
    : '';

  return Wrapper({
    content: `${fieldLabel}<input ${inputProps} ${validationProps} />`,
    element: 'span',
  });
};
