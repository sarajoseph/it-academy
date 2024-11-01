import { describe, it, expect } from 'vitest'
import { usePercentage } from '../src/hooks/usePercentage'

describe('usePercentage Hook', () => {
  it('should calculate the correct percentage when there is an increase', () => {
    const weekData: number[] = []
    weekData[0] = 100
    weekData[1] = 150
    weekData[2] = 200
    weekData[3] = 250
    weekData[4] = 300
    weekData[5] = 350
    weekData[6] = 400
    const currentDay = 2
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('33.3') // (200 - 150) / 150 * 100 = 33.3%
  })

  it('should calculate the correct percentage when there is a decrease', () => {
    const weekData: number[] = []
    weekData[0] = 400
    weekData[1] = 300
    weekData[2] = 200
    weekData[3] = 150
    weekData[4] = 100
    weekData[5] = 50
    weekData[6] = 25
    const currentDay = 6
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('-50.0') // (25 - 50) / 50 * 100 = -50.0%
  })

  it('should handle the case where currentDay is 1 and previous day is 7', () => {
    const weekData: number[] = []
    weekData[0] = 200
    weekData[1] = 300
    weekData[2] = 400
    weekData[3] = 500
    weekData[4] = 600
    weekData[5] = 700
    weekData[6] = 100
    const currentDay = 0
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('100.0') // (200 - 100) / 100 * 100 = 100.0%
  })

  it('should return 0.0 when there is no difference between days', () => {
    const weekData: number[] = []
    weekData[0] = 150
    weekData[1] = 150
    weekData[2] = 150
    weekData[3] = 150
    weekData[4] = 150
    weekData[5] = 150
    weekData[6] = 150
    const currentDay = 3
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('0.0') // No hay diferencia, porcentaje = 0.0%
  })

  it('should handle cases with decimal values correctly', () => {
    const weekData: number[] = []
    weekData[0] = 100.5
    weekData[1] = 150.25
    weekData[2] = 200.75
    weekData[3] = 250.4
    weekData[4] = 300.9
    weekData[5] = 350.3
    weekData[6] = 400.1
    const currentDay = 5
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('16.4') // (350.3 - 300.9) / 300.9 * 100 = 16.4%
  })
})
