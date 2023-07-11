import Wrapper, { loadStyles } from './Wrapper';
import { renderProps } from './helpers';

type InputType = 'text' | 'number' | 'email' | 'submit' | 'password' | 'checkbox';
type InputProps = {
  id?: string;
  required?: boolean;
  name: string;
  type: InputType;
  placeHolder?: string;
  label: string;
  value?: string;
  validator?: {
    path: string;
    trigger: 'change' | 'blur';
    target?: string;
  };
};

export default ({ name, type, id, label, value, required = false, placeHolder, validator }: InputProps) => {
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
    {
      name: 'value',
      value,
    },
    {
      name: 'class',
      value: loadStyles({
        padding: 'gutter',
        marginTop: 'xsmall',
      }),
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
        htmlFor: id,
      })
    : '';

  const bleedLabel = type === 'checkbox';

  return Wrapper({
    element: 'div',
    display: 'flex',
    flexDirection: type === 'checkbox' ? 'row' : 'column',
    alignItems: type === 'checkbox' ? 'center' : 'stretch',
    width: type === 'checkbox' ? 'auto' : 'full',
    children: [
      bleedLabel ? '' : fieldLabel,
      `<input ${inputProps} ${validationProps} />`,
      bleedLabel ? fieldLabel : '',
    ],
  });
};
