import type { Rule } from 'unocss'

const verticalMiddle: Rule[] = [
  ['middle', { 'vertical-align': 'middle' }],
  [
    'middle-out',
    {
      'text-align': 'center',
      'vertical-align': 'middle',
    },
  ],
  [
    'middle-before',
    {
      content: '\'\'',
      display: 'inline-block',
      height: '100%',
      'vertical-align': 'middle',
    },
  ],
  [
    'middle-inner',
    {
      display: 'inline-block',
      'vertical-align': 'middle',
    },
  ],
]

export default verticalMiddle