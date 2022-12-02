import isNull from '../isNull'

describe('sum', () => {
  it('pass null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('pass undefined', () => {
    expect(isNull(void 0)).toBe(false)
  })
  it('pass other type', () => {
    expect(isNull(1)).toBe(false)
    expect(isNull('sss')).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull(Symbol())).toBe(false)
  })
})
