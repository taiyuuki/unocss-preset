import { numberReg } from '../regs'
import { joinReg } from '../utils'
import type { Rule } from 'unocss'

const opacity: Rule[] = [
  [
    joinReg(`^opacity-(${numberReg})$`),
    ([, value]) => ({ opacity: value }),
  ],
]

export default opacity