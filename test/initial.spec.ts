import initialPreset from '../src/presets/initial'
import { describe, it, expect } from 'vitest'
import { unoTest } from './unotest'

describe('margin', () => {
  const test1 = 'm-r-initial'
  const test2 = 'w-initial'
  const test3 = 'border-color-initial'
  const test4 = 'pst-b-initial'

  it('should be output margin', () => {
    initialPreset.forEach(item => {
      const t1 = unoTest(item, test1)
      const t2 = unoTest(item, test2)
      const t3 = unoTest(item, test3)
      const t4 = unoTest(item, test4)
      if (t1) {
        expect(t1).toMatchInlineSnapshot(`
          "margin-right: initial;
          "
        `)
      }
      if (t2) {
        expect(t2).toMatchInlineSnapshot(`
          "width: initial;
          "
        `)
      }
      if (t3) {
        expect(t3).toMatchInlineSnapshot(`
          "border-color: initial;
          "
        `)
      }
      if (t4) {
        expect(t4).toMatchInlineSnapshot(`
          "bottom: initial;
          "
        `)
      }
    })
  })
})