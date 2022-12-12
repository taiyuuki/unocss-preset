import { numberReg, unitReg } from '../regs'
import { joinReg } from '../utils'
import type { Rule } from 'unocss'

const gap: Rule[] = [
  [
    joinReg(`^gap-(${numberReg})(${unitReg})$`),
    ([, distance, unit]) => ({ gap: `${distance}${unit || 'px'}` }),
  ],
]

export default gap