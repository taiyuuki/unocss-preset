import { joinReg } from '../utils'
import type { Rule } from 'unocss'
import { numberReg, unitReg } from '../regs'

const baseReg = 'pst'
const position: Rule[] = [
  ['pst-rel', { position: 'relative' }],
  ['pst-abs', { position: 'absolute' }],
  ['pst-fix', { position: 'fixed' }],
  ['pst-stk', { position: 'sticky' }],
  [joinReg(`^${baseReg}-t-(${numberReg})(${unitReg})$`), ([, distance, unit]) => ({ top: `${distance}${unit || 'px'}` })],
  [joinReg(`^${baseReg}-r-(${numberReg})(${unitReg})$`), ([, distance, unit]) => ({ right: `${distance}${unit || 'px'}` })],
  [joinReg(`^${baseReg}-b-(${numberReg})(${unitReg})$`), ([, distance, unit]) => ({ bottom: `${distance}${unit || 'px'}` })],
  [joinReg(`^${baseReg}-l-(${numberReg})(${unitReg})$`), ([, distance, unit]) => ({ left: `${distance}${unit || 'px'}` })],
]

export default position