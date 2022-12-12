import { joinReg } from '../utils'
import type { Rule } from 'unocss'
import { numberReg, unitReg } from '../regs'

const margin: Rule[] = [
  ['m-auto', { margin: 'auto' }],
  ['m-t-auto', { 'margin-top': 'auto' }],
  ['m-r-auto', { 'margin-right': 'auto' }],
  ['m-b-auto', { 'margin-bottom': 'auto' }],
  ['m-l-auto', { 'margin-left': 'auto' }],
  ['m-x-auto', { 'margin-left': 'auto', 'margin-right': 'auto' }],
  ['m-y-auto', { 'margin-top': 'auto', 'margin-bottom': 'auto' }],
  [
    joinReg(`^m-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ margin: `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^m-x-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({
      'margin-left': `${distance}${unit || 'px'}`,
      'margin-right': `${distance}${unit || 'px'}`,
    }),
  ],
  [
    joinReg(`^m-y-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({
      'margin-top': `${distance}${unit || 'px'}`,
      'margin-bottom': `${distance}${unit || 'px'}`,
    }),
  ],
  [
    joinReg(`^m-l-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'margin-left': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^m-r-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'margin-right': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^m-t-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'margin-top': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^m-b-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'margin-bottom': `${distance}${unit || 'px'}` }),
  ],
]

export default margin