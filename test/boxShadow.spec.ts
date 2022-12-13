import boxShadow from '../src/presets/boxShadow'
import { describe, it, expect } from 'vitest'
import { unoTest } from './unotest'

describe('box-shadow', () => {
  const test1 = 'shadow-var-fcolor-1em'
  const test2 = 'shadow-#6cf-4'
  const test3 = 'shadow-inner-var-fcolor-4'
  const test4 = 'shadow-inset-#fff000-1.2em'
  it('should be output box-shadow', () => {
    boxShadow.forEach(item => {
      const t1 = unoTest(item, test1)
      const t2 = unoTest(item, test2)
      const t3 = unoTest(item, test3)
      const t4 = unoTest(item, test4)
      if (t1) {
        expect(t1).toMatchInlineSnapshot(`
          "box-shadow:  0 0 1em var(--fcolor);
          "
        `)
      }
      if (t2) {
        expect(t2).toMatchInlineSnapshot(`
          "box-shadow:  0 0 4px #6cf;
          "
        `)
      }
      if (t3) {
        expect(t3).toMatchInlineSnapshot(`
          "box-shadow: inner 0 0 4px var(--fcolor);
          "
        `)
      }
      if (t4) {
        expect(t4).toMatchInlineSnapshot(`
          "box-shadow: inset 0 0 1.2em #fff000;
          "
        `)
      }
    })
  })
})