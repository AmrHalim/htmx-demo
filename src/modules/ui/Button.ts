import { loadStyles } from './Wrapper';
import { renderProps } from './helpers';
import { Method } from './types';

type ButtonProps = {
  label: string;
  method?: Method;
  action: string;
  swap?: string;
  target?: string;
  tone?: Tone;
};
type Tone = 'primary' | 'critical';

export const loadToneStyles = (tone: Tone) =>
  loadStyles({
    borderRadius: 'xsmall',
    padding: 'gutter',
    border: 'unset',
    fontSize: 'medium',
    fontWeight: 'bold',
    cursor: 'pointer',
    background: tone === 'primary' ? 'primary' : 'transparent',
    color: tone === 'primary' ? 'primary' : 'critical',
  });

export default ({ label, method = 'get', action, swap, target, tone = 'primary' }: ButtonProps) => {
  const buttonProps = renderProps([
    { name: `hx-${method}`, value: action },
    { name: 'hx-swap', value: swap },
    { name: 'hx-target', value: target },
    { name: 'class', value: loadToneStyles(tone) },
  ]);

  return `<button ${buttonProps}>${label}</button>`;
};
