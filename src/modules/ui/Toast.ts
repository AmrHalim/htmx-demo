import Wrapper from './Wrapper';

type ToastProps = {
  delay: number;
  message: string;
  position: 'top' | 'bottom';
};
export default ({ delay, message, position }: ToastProps) => {
  const Toast = Wrapper({
    position: 'sticky',
    content: message,
    top: position === 'top' ? undefined : 'xxxsmall',
    bottom: position === 'bottom' ? undefined : 'xxxsmall',
    marginTop: position === 'top' ? undefined : 'gutter',
    marginBottom: position === 'bottom' ? undefined : 'gutter',
    right: 'xxxsmall',
    left: 'xxxsmall',
    display: 'flex',
    justifyContent: 'center',
  });

  return `<div _="on load wait ${delay}s then transition opacity to 0 then remove me">${Toast}</div>`;
};
