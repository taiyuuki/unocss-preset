import presets from 'glob:./presets/**/*'
import type { Preset, Rule } from 'unocss'

const rules: Rule[] = []

presets.forEach((preset) => {
  rules.push(...preset.default)
})

export function presetTaiyuuki(): Preset {
  return {
    name: 'unocss-taiyuuki',
    theme: {
      colors: {},
      size: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      breakpoints: {
        sm: '599px',
        md: '768px',
        lg: '1024px',
      },
    },
    rules,
  }
}