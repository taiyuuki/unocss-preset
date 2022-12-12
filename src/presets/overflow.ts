import type { Rule } from 'unocss'

const overflow: Rule[] = [
  ['overflow-hidden', { overflow: 'hidden' }],
  ['overflow-auto', { overflow: 'auto' }],
  ['overflow-x-hidden', { 'overflow-x': 'hidden' }],
  ['overflow-y-hidden', { 'overflow-y': 'hidden' }],
  ['overflow-x-auto', { 'overflow-x': 'auto' }],
  ['overflow-y-auto', { 'overflow-y': 'auto' }],
]

export default overflow