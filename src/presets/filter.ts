import { joinReg } from '../utils'
import type { Rule } from 'unocss'
import {  numberReg, unitReg } from '../regs'

const baseReg = 'filter'
const filter: Rule[] = [
  [
    joinReg(`^${baseReg}-blur-(${numberReg})(${unitReg})$`),
    ([, value, unit]) => ({ filter: `blur(${value}${unit || 'px'})` }),
  ],
]

export default filter