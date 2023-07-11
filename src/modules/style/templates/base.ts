import {
  UNSET,
  alignItemsOptions,
  borderStyleOptions,
  colorsOptions,
  cursorOptions,
  displayOptions,
  flexDirectionOptions,
  fontSizeOptions,
  justifyContentOptions,
  positionOptions,
  sizesOptions,
  textDecorationOptions,
  weightsOptions,
  widthOptions,
} from '../types';
import { createClassNameStyle } from '../utils';

export default `
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: Arial;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .page {
    width: ${widthOptions.full};
    max-width: 1280px;
    margin: 0 auto;
    padding: ${sizesOptions.gutter}
  }

  ${createClassNameStyle({ values: displayOptions, prop: 'display', useKey: false })}
  ${createClassNameStyle({ values: justifyContentOptions, prop: 'justify-content', useKey: false })}
  ${createClassNameStyle({ values: alignItemsOptions, prop: 'align-items', useKey: false })}
  ${createClassNameStyle({ values: flexDirectionOptions, prop: 'flex-direction', useKey: false })}
  ${createClassNameStyle({ values: colorsOptions, prop: 'background' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'padding' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'padding-right' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'padding-left' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'padding-top' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'padding-bottom' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'margin' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'margin-right' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'margin-left' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'margin-top' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'margin-bottom' })}
  ${createClassNameStyle({ values: fontSizeOptions, prop: 'font-size' })}
  ${createClassNameStyle({ values: weightsOptions, prop: 'font-weight', useKey: false })}
  ${createClassNameStyle({ values: colorsOptions, prop: 'color' })}
  ${createClassNameStyle({ values: textDecorationOptions, prop: 'text-decoration', useKey: false })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'gap' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'border-radius' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'border-right-width' })}
  ${createClassNameStyle({ values: borderStyleOptions, prop: 'border-right-style', useKey: false })}
  ${createClassNameStyle({ values: colorsOptions, prop: 'border-right-color' })}
  ${createClassNameStyle({ values: cursorOptions, prop: 'cursor', useKey: false })}
  ${createClassNameStyle({ values: widthOptions, prop: 'width' })}
  ${createClassNameStyle({ values: positionOptions, prop: 'position' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'top' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'bottom' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'left' })}
  ${createClassNameStyle({ values: sizesOptions, prop: 'right' })}

  .border-unset {
    border: ${UNSET};
  }
`;
