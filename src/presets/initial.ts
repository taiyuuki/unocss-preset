import type { Rule } from 'unocss'
import { cssList } from '../list'

const initialPreset: Rule[] = cssList.map(css => {
  return [
    `${css[0]}-initial`,
    { [css[1]]: 'initial' },
  ]
})

export default initialPreset