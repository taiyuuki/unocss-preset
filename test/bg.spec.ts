import background from '../src/presets/background'
import { describe, it, expect } from 'vitest'
import { unoTest } from './unotest'

describe('margin', () => {
  const test1 = 'bg-#01faff'
  const test2 = 'bg-url-bg.png'
  const test3 = 'bg-color-var-fcolor'
  const test4 = 'bg-var-fcolor'
  it('should be output border', () => {
    background.forEach(item => {
      const t1 = unoTest(item, test1)
      const t2 = unoTest(item, test2)
      const t3 = unoTest(item, test3)
      const t4 = unoTest(item, test4)
      if (t1) {
        expect(t1).toMatchInlineSnapshot(`
          "background-color: #01faff;
          "
        `)
      }
      if (t2) {
        expect(t2).toMatchInlineSnapshot(`
          "background-image: url(bg.png);
          "
        `)
      }
      if (t3) {
        expect(t3).toMatchInlineSnapshot(`
          "background-color: var(--fcolor);
          "
        `)
      }
      if (t4) {
        expect(t4).toMatchInlineSnapshot(`
          "background-color: var(--fcolor);
          "
        `)
      }
    })
  })
})