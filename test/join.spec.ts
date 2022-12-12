import { joinReg } from '../src/utils'
import { describe, it, expect } from 'vitest'

describe('join-reg', () => {
  it('should be join string to reg', () => {
    expect(joinReg('shadow-', '([\\d.]+)', '([A-z]*)')).toMatchInlineSnapshot('/shadow-\\(\\[\\\\d\\.\\]\\+\\)\\(\\[A-z\\]\\*\\)/')
  })
})