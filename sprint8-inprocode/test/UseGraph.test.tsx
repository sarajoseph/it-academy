import { describe, it, expect, vi } from 'vitest'
import { useGraph } from '../src/hooks/useGraph'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: { [key: string]: string } = {
        'short_monday': 'Mon',
        'short_tuesday': 'Tue',
        'short_wednesday': 'Wed',
        'short_thursday': 'Thu',
        'short_friday': 'Fri',
        'short_saturday': 'Sat',
        'short_sunday': 'Sun',
        'monday': 'Monday',
        'tuesday': 'Tuesday',
        'wednesday': 'Wednesday',
        'thursday': 'Thursday',
        'friday': 'Friday',
        'saturday': 'Saturday',
        'sunday': 'Sunday',
        'chart.datasets_label': 'Expenses'
      }
      return translations[key] || key
    },
  }),
}))

describe('useGraph Hook', () => {
  it('should return chart data and options correctly', () => {
    // Datos de prueba
    const weekData = [200, 59, 7.4, 83, 273.23, 437.84, 350.05]
    const currentDay = 2

    // Llama al hook useGraph
    const { chartData, options } = useGraph(weekData, currentDay)

    // Verifica la estructura del chartData
    expect(chartData).toEqual({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Expenses',
          data: weekData,
          backgroundColor: [
            'rgba(236, 118, 92, 1)', // Mon
            'rgba(236, 118, 92, 1)', // Tue
            'rgba(115, 182, 190, 1)', // Wed (currentDay)
            'rgba(236, 118, 92, 1)', // Thu
            'rgba(236, 118, 92, 1)', // Fri
            'rgba(236, 118, 92, 1)', // Sat
            'rgba(236, 118, 92, 1)'  // Sun
          ],
          borderRadius: 5,
        }
      ]
    })

    // Verifica la estructura de options
    expect(options).toEqual(expect.any(Object))
  })
})
