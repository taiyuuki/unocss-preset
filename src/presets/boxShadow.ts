import type { Rule } from 'unocss'
import { albertReg, hexReg, numberReg, unitReg } from '../regs'
import { joinReg } from '../utils'

const baseReg = 'shadow'
/**
 * @exapmle
 * {shadow-#6fc-1em}  box-shadow: 0 0 1em #6cf
 * {shadow-var-fcolor-4} box-shadow: 0 0 2px var(--fcolor)
 * {shadow-inner-var-fcolor-3px} box-shadow: inner 0 0 3px var(--fcolor)
 */
const boxShadow: Rule[] = [
  [
    joinReg(`^${baseReg}-(${numberReg})(${unitReg})$`),
    ([, size, unit]) => ({ 'box-shadow': ` 0 0 ${size}${unit || 'px'} black` }),
  ],
  [
    joinReg(`^${baseReg}-var-(${albertReg})-(${numberReg})(${unitReg})$`),
    ([, colorVar, size, unit]) => ({ 'box-shadow': ` 0 0 ${size}${unit || 'px'} var(--${colorVar})` }),
  ],
  [
    joinReg(`^${baseReg}-(${hexReg})-(${numberReg})(${unitReg})$`),
    ([, hex, size, unit]) => ({ 'box-shadow': ` 0 0 ${size}${unit || 'px'} ${hex}` }),
  ],
  [
    joinReg(`^${baseReg}-inner-var-(${albertReg})-(${numberReg})(${unitReg})$`),
    ([, colorVar, size, unit]) => ({ 'box-shadow': `inner 0 0 ${size}${unit || 'px'} var(--${colorVar})` }),
  ],
  [
    joinReg(`^${baseReg}-inner-(${hexReg})-(${numberReg})(${unitReg})$`),
    ([, colorVar, size, unit]) => ({ 'box-shadow': `inner 0 0 ${size}${unit || 'px'} ${colorVar}` }),
  ],
  [
    joinReg(`^${baseReg}-inset-var-(${albertReg})-(${numberReg})(${unitReg})$`),
    ([, colorVar, size, unit]) => ({ 'box-shadow': `inset 0 0 ${size}${unit || 'px'} var(--${colorVar})` }),
  ],
  [
    joinReg(`^${baseReg}-inset-(${hexReg})-(${numberReg})(${unitReg})$`),
    ([, colorVar, size, unit]) => ({ 'box-shadow': `inset 0 0 ${size}${unit || 'px'} ${colorVar}` }),
  ],
]

export default boxShadow