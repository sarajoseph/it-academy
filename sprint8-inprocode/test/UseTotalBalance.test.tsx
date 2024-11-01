import { useTotalBalance } from '../src/hooks/useTotalBalance'
import { describe, expect, it } from 'vitest'

describe('useTotalBalance', () => {
  it('should return the correct total balance for a given weekData array', () => {
    const weekData1 = [10, 20, 30, 40, 50, 60, 70]
    const weekData2 = [15, 25, 35, 45, 55, 65, 75]
    const weekData3: number[] = []

    expect(useTotalBalance(weekData1)).toBe(280)
    expect(useTotalBalance(weekData2)).toBe(315)
    expect(useTotalBalance(weekData3)).toBe(0)
  })
})
