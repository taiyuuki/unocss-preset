import type { Rule } from 'unocss'
import { numberReg, unitReg } from '../regs'
import { joinReg } from '../utils'

const content: Rule[] = [
  ['w-auto', { width: 'auto' }],
  ['w-max-auto', { 'max-width': 'auto' }],
  ['w-content', { width: 'fit-content' }],
  ['h-auto', { height: 'auto' }],
  ['h-max-auto', { 'max-height': 'auto' }],
  ['h-content', { height: 'fit-content' }],
  [
    joinReg(`^w-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ width: `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^w-max-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'max-width': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^w-min-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'min-width': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^h-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ height: `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^h-max-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'max-height': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^h-min-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'min-height': `${distance}${unit || 'px'}` }),
  ],
]

export default content