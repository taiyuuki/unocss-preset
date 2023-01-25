import { joinReg } from '../utils'
import type { Rule } from 'unocss'
import { albertReg, hexReg, numberReg, unitReg } from '../regs'

const baseReg = 'text'
const text: Rule[] = [
  [
    joinReg(`^${baseReg}-(${numberReg})(${unitReg})$`),
    ([, d, w]) => ({ 'font-size': `${d}${w || 'px'}` }),
  ],
  [
    joinReg(`^${baseReg}(-color)?-var-(${albertReg})$`),
    ([,, color]) => ({ color: `var(--${color})` }),
  ],
  [
    joinReg(`^${baseReg}-color-(${hexReg})$`),
    ([, color]) => ({ color: color }),
  ],
  ['text-bold', { 'font-weight': 'bold' }],
  ['text-center', { 'text-align': 'center' }],
  ['text-left', { 'text-align': 'left' }],
  ['text-middle', { 'vertical-align': 'middle' }],
  ['text-right', { 'text-align': 'right' }],
  ['text-bold', { 'font-weight': 'bold' }],
  ['text-break-all', { 'word-break': 'break-all' }],
  ['text-keep-all', { 'word-break': 'keep-all' }],
  ['text-underline', { 'text-decoration': 'underline' }],
  ['text-nowrap', { 'white-space': 'nowrap' }],
  [
    'text-ellipsis',
    {
      'text-overflow': 'ellipsis',
      'overflow': 'hidden',
      'white-space': 'nowrap',
    },
  ],
  [
    joinReg(`^${baseReg}-line-(${numberReg})(${unitReg})$`),
    ([, height, unit]) => ({ 'line-height': `${height}${unit || 'px'}` }),
  ],
]

export default text