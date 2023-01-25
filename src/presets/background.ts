import { albertReg, hexReg, numberReg, unitReg } from '../regs'
import { joinReg } from '../utils'
import type { Rule } from 'unocss'

const background: Rule[] = [
  ['bg-repeat', { 'background-repeat': 'repeat' }],
  ['bg-norepeat', { 'background-repeat': 'no-repeat' }],
  ['bg-top', { 'background-position': 'top' }],
  ['bg-right', { 'background-position': 'right' }],
  ['bg-bottom', { 'background-position': 'bottom' }],
  ['bg-left', { 'background-position': 'left' }],
  ['bg-cover', { 'background-size': 'cover' }],
  ['bg-contain', { 'background-size': 'contain' }],
  [
    joinReg(`^bg(-color)?-var-(${albertReg})$`),
    ([,, color]) => ({ 'background-color': `var(--${color})` }),
  ],
  [
    joinReg(`^bg-color-(${hexReg})$`),
    ([, color]) => ({ 'background-color': color }),
  ],
  [
    joinReg(`^bg-(${hexReg})$`),
    ([, color]) => ({ 'background-color': color }),
  ],
  [
    /^bg-url-(.+)$/,
    ([, url]) => ({ 'background-image': `url(${url})` }),
  ],
  [
    joinReg(`^bg-size-(${numberReg})(${unitReg})$`),
    ([, size, unit]) => ({ 'background-size': `${size}${unit || 'px'}` }),
  ],
]

export default background