import { padding } from '../src/presets/padding'
import { describe, it, expect } from 'vitest'
import { unoTest } from './unotest'

describe('padding', () => {
  const test1 = 'p-unset'
  const test2 = 'p-t-3.5em'
  const test3 = 'p-r-10'
  it('should be output padding', () => {
    padding.forEach(item => {
      const t1 = unoTest(item, test1)
      const t2 = unoTest(item, test2)
      const t3 = unoTest(item, test3)
      if (t1) {
        expect(t1).toMatchInlineSnapshot(`
          "padding: unset;
          "
        `)
      }
      if (t2) {
        expect(t2).toMatchInlineSnapshot(`
          "padding-top: 3.5em;
          "
        `)
      }
      if (t3) {
        expect(t3).toMatchInlineSnapshot(`
          "padding-right: 10px;
          "
        `)
      }
    })
  })
})