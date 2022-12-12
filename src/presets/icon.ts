import { albertReg, hexReg } from '../regs'
import { joinReg } from '../utils'
import type { Rule } from 'unocss'

const icon: Rule[] = [
  [
    joinReg(`^icon-color-var-(${albertReg})$`),
    ([, color]) => ({ fill: `var(--${color})` }),
  ],
  [
    joinReg(`^icon-color-(${hexReg})$`),
    ([, color]) => ({ fill: color }),
  ],
  [
    joinReg(`^icon-var-(${albertReg})$`),
    ([, color]) => ({ fill: `var(--${color})` }),
  ],
  [
    joinReg(`^icon-(${hexReg})$`),
    ([, color]) => ({ fill: color }),
  ],
]

export default icon