export const UNSET = 'unset';

export const colorsOptions = {
  secondary: '#E9ECF1',
  primary: '#4964e9',
  neutral: '#2E3849',
  neutralLight: '#EAECF1',
  white: '#FFF',
  critical: '#B91E1E',
  black: '#000',
  transparent: 'transparent',
} as const;
export type Color = keyof typeof colorsOptions;

const sharedSpaces = {
  center: 'center',
  end: 'end',
  flexEnd: 'flex-end',
  flexStart: 'flex-start',
  start: 'start',
  stretch: 'stretch',
} as const;

export const justifyContentOptions = {
  ...sharedSpaces,
  spaceBetween: 'space-between',
  left: 'left',
  right: 'right',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
} as const;
export type JustifyContent = keyof typeof justifyContentOptions;

export const alignItemsOptions = {
  ...sharedSpaces,
  selfEnd: 'self-end',
  selfStart: 'self-start',
} as const;
export type AlignItems = keyof typeof alignItemsOptions;

export const displayOptions = {
  flex: 'flex',
  none: 'none',
  block: 'block',
  inlineBlock: 'inline-block',
} as const;
export type Display = keyof typeof displayOptions;

export const flexDirectionOptions = {
  row: 'row',
  column: 'column',
} as const;
export type FlexDirection = keyof typeof flexDirectionOptions;

export const sizesOptions = {
  xxxsmall: '1px',
  xxsmall: '2px',
  xsmall: '4px',
  small: '6px',
  gutter: '10px',
  medium: '12px',
  large: '16px',
  xlarge: '18px',
  xxlarge: '22px',
  xxxlarge: '26px',
} as const;
export type Size = keyof typeof sizesOptions;

export const weightsOptions = {
  bold: 'bold',
  normal: 'normal',
} as const;
export type FontWeight = keyof typeof weightsOptions;

export const fontSizeOptions = {
  small: '10px',
  medium: '15px',
  large: '20px',
} as const;
export type FontSize = keyof typeof fontSizeOptions;

export const borderStyleOptions = {
  solid: 'solid',
  dotted: 'dotted',
} as const;
export type BorderStyle = keyof typeof borderStyleOptions;

export const textDecorationOptions = {
  none: 'none',
  underline: 'underline',
} as const;
export type TextDecoration = keyof typeof textDecorationOptions;

export const cursorOptions = {
  pointer: 'pointer',
  none: 'none',
  auto: 'auto',
} as const;
export type Cursor = keyof typeof cursorOptions;

export const widthOptions = {
  full: '100%',
  auto: 'auto',
} as const;
export type Width = keyof typeof widthOptions | (string & NonNullable<unknown>);

export const positionOptions = {
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky',
} as const;
export type Position = keyof typeof positionOptions;
