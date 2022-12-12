import { margin } from '../src/presets/margin'
import { describe, it, expect } from 'vitest'
import { unoTest } from './unotest'

describe('margin', () => {
  const test1 = 'm-x-auto'
  const test2 = 'm-t-3.5em'
  const test3 = 'm-r-10'
  const test4 = 'm-t-10%'
  it('should be output margin', () => {
    margin.forEach(item => {
      const t1 = unoTest(item, test1)
      const t2 = unoTest(item, test2)
      const t3 = unoTest(item, test3)
      const t4 = unoTest(item, test4)
      if (t1) {
        expect(t1).toMatchInlineSnapshot(`
          "margin-left: auto;
          margin-right: auto;
          "
        `)
      }
      if (t2) {
        expect(t2).toMatchInlineSnapshot(`
          "margin-top: 3.5em;
          "
        `)
      }
      if (t3) {
        expect(t3).toMatchInlineSnapshot(`
          "margin-right: 10px;
          "
        `)
      }
      if (t4) {
        expect(t4).toMatchInlineSnapshot(`
          "margin-top: 10%;
          "
        `)
      }
    })
  })
})