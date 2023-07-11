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
  event?: {
    on: 'click';
    method: Method;
    action: string;
    target?: string;
    swap?: Swap;
  };
  validator?: {
    path: string;
    trigger: 'change' | 'blur';
    target?: string;
  };
};

export default ({ name, type, id, label, value, required = false, placeHolder, validator, event }: InputProps) => {
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
      name: 'checked',
      value: type === 'checkbox' && value ? 'checked' : '',
    },
    {
      name: 'class',
      value: loadStyles({
        padding: 'gutter',
        marginTop: 'xsmall',
      }),
    },
    ...(event
      ? [
          {
            name: `hx-${event.method}`,
            value: event.action,
          },
          {
            name: 'hx-trigger',
            value: event.on,
          },
          {
            name: 'hx-target',
            value: event.target,
            prefix: '#',
          },
          {
            name: 'hx-swap',
            value: event.swap,
          },
        ]
      : []),
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
