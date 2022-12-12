import { joinReg } from '../utils'
import type { Rule } from 'unocss'
import { numberReg } from '../regs'

const baseReg = 'flex'
const flex: Rule[] = [
  ['flex-row', { display: 'flex', 'flex-direction': 'row' }],
  ['flex-column', { display: 'flex', 'flex-direction': 'column' }],
  ['row', { display: 'flex', 'flex-direction': 'row' }],
  ['column', { display: 'flex', 'flex-direction': 'column' }],
  ['flex-justify-center', { 'justify-content': 'center' }],
  ['justify-center', { 'justify-content': 'center' }],
  ['flex-justify-between', { 'justify-content': 'space-between' }],
  ['justify-between', { 'justify-content': 'space-between' }],
  ['flex-justify-around', { 'justify-content': 'space-around' }],
  ['justify-around', { 'justify-content': 'space-around' }],
  ['flex-justify-evenly', { 'justify-content': 'space-evenly' }],
  ['justify-evenly', { 'justify-content': 'space-evenly' }],
  ['flex-justify-start', { 'justify-content': 'flex-start' }],
  ['justify-start', { 'justify-content': 'flex-start' }],
  ['flex-justify-end', { 'justify-content': 'flex-end' }],
  ['justify-end', { 'justify-content': 'flex-end' }],
  ['flex-wrap', { 'flex-wrap': 'wrap' }],
  ['flex-nowrap', { 'flex-wrap': 'nowrap' }],
  ['flex-items-center', { 'align-items': 'center' }],
  [joinReg(`^${baseReg}-(${numberReg})$`), ([, value]) => ({ flex: value })],
  [joinReg(`^${baseReg}-(${numberReg}%)$`), ([, value]) => ({ flex: value })],
]

export default flex