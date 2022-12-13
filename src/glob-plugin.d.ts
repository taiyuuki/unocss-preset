declare module 'glob:./presets/*' {
  import type { Rule } from 'unocss'
  const presets: { default: Rule[] }[]
  export default presets
}