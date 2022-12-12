import type { Rule } from 'unocss'
import { numberReg, unitReg } from '../regs'
import { joinReg } from '../utils'

const padding: Rule[] = [
  [
    joinReg(`^p-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ padding: `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^p-x-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({
      'padding-left': `${distance}${unit || 'px'}`,
      'padding-right': `${distance}${unit || 'px'}`,
    }),
  ],
  [
    joinReg(`^p-y-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({
      'padding-top': `${distance}${unit || 'px'}`,
      'padding-bottom': `${distance}${unit || 'px'}`,
    }),
  ],
  [
    joinReg(`^p-l-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'padding-left': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^p-r-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'padding-right': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^p-t-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'padding-top': `${distance}${unit || 'px'}` }),
  ],
  [
    joinReg(`^p-b-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ 'padding-bottom': `${distance}${unit || 'px'}` }),
  ],
]

export default padding