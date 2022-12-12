import type { Rule } from 'unocss'
import { cssList } from '../list'

const inheritPreset: Rule[] = cssList.map(css => {
  return [
    `${css[0]}-inherit`,
    { [css[1]]: 'inherit' },
  ]
})

export default inheritPreset