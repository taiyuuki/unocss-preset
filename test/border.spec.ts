import border from '../src/presets/border'
import { describe, it, expect } from 'vitest'
import { unoTest } from './unotest'

describe('margin', () => {
  const test1 = 'border-#6cf'
  const test2 = 'border-radius-1.5em'
  const test3 = 'border-color-var-fcolor'
  it('should be output border', () => {
    border.forEach(item => {
      const t1 = unoTest(item, test1)
      const t2 = unoTest(item, test2)
      const t3 = unoTest(item, test3)
      if (t1) {
        expect(t1).toMatchInlineSnapshot(`
          "border-color: #6cf;
          "
        `)
      }
      if (t2) {
        expect(t2).toMatchInlineSnapshot(`
          "border-radius: 1.5em;
          "
        `)
      }
      if (t3) {
        expect(t3).toMatchInlineSnapshot(`
          "border-color: var(--fcolor);
          "
        `)
      }
    })
  })
})