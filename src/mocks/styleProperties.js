const tipographyProperties = {
  font: ['font-family', 'font-size', 'font-style', 'font-weight', 'font-stretch', 'font-smoothing', 'font-variant-numeric', 'font-feacture-settings'],
  listStyle: ['list-style-image', 'list-style-position', 'list-style-type'],
  textDecoration: ['color', 'text-decoration-line', 'text-decoration-color', 'text-decoration-style', 'text-decoration-thickness'],
  text: ['text-align', 'vertical-align', 'text-underline-offset', 'text-transform', 'text-overflow', 'text-wrap', 'text-indent'],
  size: ['letter-spacing', 'line-height', 'white-space', 'word-break', 'overflow-wrap', 'line-clamp', 'hyphens', 'content']
};

const sizeAndSpaceProperties = {
  space: ['padding', 'margin'],
  width: ['width', 'min-width', 'max-width'],
  height: ['height', 'min-height', 'max-height'],
  inline_size: ['inline-size', 'min-inline-size', 'max-inline-size'],
  block_size: ['block-size', 'min-block-size', 'max-block-size'],
};

const gridAndFlexProperties = {
  flex: ['flex', 'flex-basis', 'flex-direction', 'flex-wrap', 'flex-grow', 'flex-shrink', 'order', 'align-self', 'align-items', 'align-content', 'justify-self', 'justify-items', 'justify-content', 'place-self', 'place-items', 'place-content'],
  grid: ['grid-template-columns', 'grid-column', 'grid-template-rows', 'grid-row', 'grid-auto-flow', 'grid-auto-columns', 'grid-auto-rows', 'gap'],
};

export const styleProperties = {
  tipography: {
    title: 'Tipography',
    properties: tipographyProperties
  },
  sizeAndSpace: {
    title: 'Spacing & Sizing',
    properties: sizeAndSpaceProperties
  },
gridAndFlex: {
    title: 'Flexbox & Grid',
    properties: gridAndFlexProperties
  }
};