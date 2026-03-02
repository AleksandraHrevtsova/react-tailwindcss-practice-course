export const descriptions = {
  'font-family': ['font-sans', 'font-serif', 'font-mono', 'font-[<value>]', 'font-(family-name:<custom-property>)'],
  'font-size': ['text-base', 'text-xs(|| -sm || -lg)', 'text-xl(2...9xl)', 'text-[<value>]', 'text-(length:<custom-property>)'],
  'font-style': ['italic', 'not-italic'],
  'font-weight': ['font-normal', 'font-thin', 'font-light', 'font-extralight', 'font-medium', 'font-bold', 'font-semi(extra)bold', 'font-black', 'font-[<value>]', 'font-(<custom-property>)'],
  'font-stretch': ['font-stretch-normal', 'font-stretch-condensed', 'font-stretch-(ultra || extra || semi)-condensed', 'font-stretch-expanded', 'font-stretch-(ultra || extra || semi)-expanded', 'font-stretch-<percentage>', 'font-stretch-[<value>]', 'font-stretch-(<custom-property>)'],
  'font-smoothing': ['antialiased', 'subpixel-antialiased'],
  'font-variant-numeric': ['ordinal', 'normal-nums', 'tabular-nums', 'lining-nums', 'oldstyle-nums', 'proportional-nums', 'slashed-zero', 'stacked-fractions', 'diagonal-fractions'],
  'font-feacture-settings': ['font-features-[<value>]', 'font-features-(<custom-property>)'],
  'list-style-image': ['list-image-none', 'list-image-[<value>]', 'list-image-(<custom-property>)'],
  'list-style-position': ['list-inside', 'list-outside'],
  'list-style-type': ['list-none', 'list-disc', 'list-decimal', 'list-[<value>]', 'list-(<custom-property>)'],
  'color': ['text-inherit', 'text-current', 'text-transparent', 'text-black', 'text-white', 'text-red-50(100, 200, ..., 900, 950)', 'text-[<value>]', 'text-(<custom-property>)'],
  'text-decoration-line': ['underline', 'overline', 'line-through', 'no-underline'],
  'text-decoration-color': ['decoration-inherit', 'decoration-current', 'decoration-transparent', 'decoration-black', 'decoration-white', 'decoration-red-50(100, 200, ..., 900, 950)', 'decoration-[<value>]', 'decoration-(<custom-property>)'],
  'text-decoration-style': ['decoration-solid', 'decoration-double', 'decoration-dotted', 'decoration-dashed', 'decoration-wavy'],
  'text-decoration-thickness': ['decoration-auto', 'decoration-from-font', 'decoration-<number>', 'decoration-[<value>]', 'decoration-(length:<custom-property>)'],
  'text-align': ['text-left', 'text-right', 'text-center', 'text-justify', 'text-start', 'text-end'],
  'vertical-align': ['align-baseline', 'align-top', 'align-bottom', 'align-middle', 'align-text-top', 'align-text-bottom', 'align-sub', 'align-super', 'align-[<value>]', 'align-(<custom-property>)'],
  'text-underline-offset': ['underline-offset-<number>', '-underline-offset-<number>', 'underline-offset-auto', 'underline-offset-[<value>]', 'underline-offset-(<custom-property>)'],
  'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
  'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
  'text-wrap': ['text-wrap', 'text-nowrap', 'text-balance', 'text-pretty'],
  'text-indent': ['indent-<number>', '-indent-<number>', 'indent-px', '-indent-px', 'indent-[<value>]', 'indent-(<custom-property>)'],
  'letter-spacing': ['tracking-normal', 'tracking-tight', 'tracking-tighter', 'tracking-wide', 'tracking-wider', 'tracking-widest', 'tracking-[<value>]', 'tracking-(<custom-property>)'],
  'line-heigh': ['text-<size>/<number>', 'text-<size>/[<value>]', 'text-<size>/(<custom-property>)', 'leading-none', 'leading-<number>', 'leading-[<value>]', 'leading-(<custom-property>)'],
  'white-space': ['whitespace-normal', 'whitespace-nowrap', 'whitespace-pre', 'whitespace-pre-line', 'whitespace-pre-wrap', 'whitespace-break-spaces'],
  'word-break': ['break-normal', 'break-all', 'break-keep'],
  'overflow-wrap': ['wrap-break-word', 'wrap-anywhere', 'wrap-normal'],
  'line-clamp': ['line-clamp-none', 'line-clamp-<number>', 'line-clamp-[<value>]', 'line-clamp-(<custom-property>)'],
  'hyphens': ['hyphens-none', 'hyphens-manual', 'hyphens-auto'],
  'content': ['content-none', 'content-[<value>]', 'content-(<custom-property>)'],
  'padding': [
    'p - padding',
    '(p || ...)-px', // padding-top: 1px;
    '(p || ...)-<number>',
    '(p || ...)-[<value>]',
    '(p || ...)-(<custom-property>)',
    '... :',
    'pt - padding-top',
    'pb - padding-bottom',
    'pl - padding-left',
    'pr - padding-right',
    'px - padding-inline',
    'ps - padding-inline-start',
    'pe - padding-inline-end',
    'py - padding-block',
    'pbs - padding-block-start',
    'pbe - padding-block-end',
  ],
  'margin': [
    'm-px',
    '-m-px',
    'm-<number>',
    '-m-<number>',
    'm-auto',
    'm-[<value>]',
    'm-(<custom-property>)'
  ],
  'width': [],
  'min-width': [],
  'max-width': [],
  'height': [],
  'min-height': [],
  'max-height': [],
  'inline-size': [],
  'min-inline-size': [],
  'max-inline-size': [],
  'block-size': [],
  'min-block-size': [],
  'maz-block-size': [],
  '': [],
  '': [],
  '': [],
  '': [],
  '': [],
  '': [],


};

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