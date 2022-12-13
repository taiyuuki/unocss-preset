import position from '../src/presets/position'
import { describe, it, expect } from 'vitest'
import { unoTest } from './unotest'

describe('padding', () => {
  const test1 = 'pst-abs'
  const test2 = 'pst-t-10'
  const test3 = 'pst-b-2em'
  it('should be output padding', () => {
    position.forEach(item => {
      const t1 = unoTest(item, test1)
      const t2 = unoTest(item, test2)
      const t3 = unoTest(item, test3)
      if (t1) {
        expect(t1).toMatchInlineSnapshot(`
          "position: absolute;
          "
        `)
      }
      if (t2) {
        expect(t2).toMatchInlineSnapshot(`
          "top: 10px;
          "
        `)
      }
      if (t3) {
        expect(t3).toMatchInlineSnapshot(`
          "bottom: 2em;
          "
        `)
      }
    })
  })
})