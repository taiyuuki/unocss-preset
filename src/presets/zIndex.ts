import { numberReg } from '../regs'
import { joinReg } from '../utils'
import type { Rule } from 'unocss'

const zIndex: Rule[] = [
  [
    joinReg(`^z-index-(${numberReg})`),
    ([, value]) => ({ 'z-index': value }),
  ],
]

export default zIndex