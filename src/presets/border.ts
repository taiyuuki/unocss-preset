import { joinReg } from '../utils'
import type { Rule } from 'unocss'
import { albertReg, hexReg, numberReg, unitReg } from '../regs'

const baseReg = 'border'

const border: Rule[] = [
  [
    joinReg(`^${baseReg}-style-(${albertReg})$`),
    ([, type]) => ({ 'border-style': type }),
  ],
  [
    joinReg(`^${baseReg}-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'border-width': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^${baseReg}(-color)?-var-(${albertReg})$`),
    ([,, color]) => ({ 'border-color': `var(--${color})` }),
  ],
  [
    joinReg(`^${baseReg}-(${hexReg})$`),
    ([, color]) => ({ 'border-color': color }),
  ],
  [
    joinReg(`^${baseReg}-color-(${hexReg})$`),
    ([, color]) => ({ 'border-color': color }),
  ],

  [
    joinReg(`^${baseReg}-width-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'border-width': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^${baseReg}-radius-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'border-radius': `${distance}${unit || 'px'}` }),
  ],
  ['border-box', { 'box-sizing': 'border-box' }],
  ['border-solid', { 'border-style': 'solid' }],
  ['outline-0', { outline: '0' }],
]

export default border