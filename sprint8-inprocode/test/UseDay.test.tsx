import { describe, it, expect } from 'vitest'
import { useDay } from '../src/hooks/useDay'

describe('useDay Hook', () => {
  it('should return the correct day of the week for a given date', () => {
    expect(useDay('2024-08-12')).toBe(0) // Lunes
    expect(useDay('2024-08-13')).toBe(1) // Martes
    expect(useDay('2024-08-14')).toBe(2) // Miércoles
    expect(useDay('2024-08-15')).toBe(3) // Jueves
    expect(useDay('2024-08-16')).toBe(4) // Viernes
    expect(useDay('2024-08-17')).toBe(5) // Sábado
    expect(useDay('2024-08-18')).toBe(6) // Domingo
  })

  it('should return the correct day index for the current date', () => {
    const today = new Date()
    const expectedDay = today.getDay() - 1 >= 0 ? today.getDay() - 1 : 6
    expect(useDay()).toBe(expectedDay)
  })

  it('should return the correct day even with different formats', () => {
    // Formatos diferentes de fecha
    expect(useDay('August 19, 2024')).toBe(0)
    expect(useDay('08/19/2024')).toBe(0)
    expect(useDay('2024-08-19T00:00:00Z')).toBe(0)
  })
})
