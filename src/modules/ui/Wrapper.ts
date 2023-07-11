import {
  Color,
  Display,
  JustifyContent,
  justifyContentOptions,
  displayOptions,
  AlignItems,
  alignItemsOptions,
  Size,
  FontSize,
  FontWeight,
  FlexDirection,
  flexDirectionOptions,
  BorderStyle,
  Width,
  Cursor,
  Position,
} from '../style/types';
import { createClassNameProp } from '../style/utils';
import { renderProps } from './helpers';

export type WrapperProps = {
  alignItems?: AlignItems;
  background?: Color;
  border?: 'unset';
  borderRightColor?: Color;
  color?: Color;
  borderRightStyle?: BorderStyle;
  borderRightWidth?: Size;
  borderRadius?: Size;
  classNames?: string[];
  content?: string;
  children?: string[];
  cursor?: Cursor;
  display?: Display;
  element?: 'div' | 'span' | 'ul' | 'li' | 'label';
  flexDirection?: FlexDirection;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  gap?: Size;
  id?: string;
  justifyContent?: JustifyContent;
  margin?: Size;
  marginRight?: Size;
  marginBottom?: Size;
  marginLeft?: Size;
  marginTop?: Size;
  padding?: Size;
  paddingRight?: Size;
  paddingBottom?: Size;
  paddingLeft?: Size;
  paddingTop?: Size;
  position?: Position;
  style?: string;
  width?: Width;
  htmlFor?: string;
  top?: Size;
  bottom?: Size;
  left?: Size;
  right?: Size;
  height?: number;
};

export const loadStyles = ({
  alignItems,
  background,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  display,
  classNames = [],
  flexDirection,
  fontSize,
  fontWeight,
  gap,
  justifyContent,
  marginBottom,
  margin,
  marginLeft,
  marginRight,
  paddingBottom,
  paddingLeft,
  paddingTop,
  marginTop,
  padding,
  paddingRight,
  position,
  width,
  border,
  borderRadius,
  color,
  cursor,
  top,
  bottom,
  right,
  left,
  height,
}: Partial<WrapperProps>) => {
  const classes = classNames;
  display && classes.push(createClassNameProp('display', displayOptions[display]));
  flexDirection && classes.push(createClassNameProp('flex-direction', flexDirectionOptions[flexDirection]));

  justifyContent && classes.push(createClassNameProp('justify-content', justifyContentOptions[justifyContent]));
  alignItems && classes.push(createClassNameProp('align-items', alignItemsOptions[alignItems]));
  gap && classes.push(createClassNameProp('gap', gap));

  color && classes.push(createClassNameProp('color', color));
  background && classes.push(createClassNameProp('background', background));

  position && classes.push(createClassNameProp('position', position));

  padding && classes.push(createClassNameProp('padding', padding));
  paddingTop && classes.push(createClassNameProp('padding-top', paddingTop));
  paddingBottom && classes.push(createClassNameProp('padding-bottom', paddingBottom));
  paddingLeft && classes.push(createClassNameProp('padding-left', paddingLeft));
  paddingRight && classes.push(createClassNameProp('padding-right', paddingRight));

  margin && classes.push(createClassNameProp('margin', margin));
  marginRight && classes.push(createClassNameProp('margin-right', marginRight));
  marginLeft && classes.push(createClassNameProp('margin-left', marginLeft));
  marginBottom && classes.push(createClassNameProp('margin-bottom', marginBottom));
  marginTop && classes.push(createClassNameProp('margin-top', marginTop));

  borderRightWidth && classes.push(createClassNameProp('border-right-width', borderRightWidth));
  borderRightStyle && classes.push(createClassNameProp('border-right-style', borderRightStyle));
  borderRightColor && classes.push(createClassNameProp('border-right-color', borderRightColor));

  fontSize && classes.push(createClassNameProp('font-size', fontSize));
  fontWeight && classes.push(createClassNameProp('font-weight', fontWeight));
  width && classes.push(createClassNameProp('width', width));
  border && classes.push(createClassNameProp('border', border));
  borderRadius && classes.push(createClassNameProp('border-radius', borderRadius));
  cursor && classes.push(createClassNameProp('cursor', cursor));
  top && classes.push(createClassNameProp('top', top));
  bottom && classes.push(createClassNameProp('bottom', bottom));
  right && classes.push(createClassNameProp('right', right));
  left && classes.push(createClassNameProp('left', left));
  height && classes.push(createClassNameProp('height', height));

  return classes.length ? classes.join(' ') : '';
};

export default ({ id, content, children, element = 'div', style, htmlFor, ...rest }: WrapperProps) =>
  `<${element} ${renderProps([
    {
      name: 'id',
      value: id,
    },
    { name: 'style', value: style },
    { name: 'for', value: htmlFor },
    { name: 'class', value: loadStyles(rest) },
  ])}>${content ?? children?.join('')}</${element}>`;
