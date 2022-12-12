// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import presets from './presets/**/*'
import type { Preset, Rule } from 'unocss'

const rules: Rule[] = []

presets.forEach((preset: { default: Rule[] }) => {
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