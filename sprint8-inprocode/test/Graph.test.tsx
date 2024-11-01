import React from 'react'
import { Graph } from '../src/components/Graph'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

const mockContextValue = {
  weekData: [200, 59, 7.4, 83, 273.23, 437.84, 350.05],
  currentDay: 2,
  currentWeek: 0,
  setWeekData: () => {},
  setCurrentDay: () => {},
  setCurrentWeek: () => {},
  totalBalance: 0,
  setTotalBalance: () => {},
  todayExpenses: 0,
  setTodayExpenses: () => {},
  percentageDiff: '0',
  setPercentageDiff: () => {},
  maxPrevWeek: 0
}

describe('Graph Component', () => {
  it('should render Bar chart with provided data', () => {

    // Renderiza el componente con el contexto
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <Graph />
      </WeeklyExpensesContext.Provider>
    )

    // Verifica que el componente Bar está en el documento
    // `react-chartjs-2` utiliza `img` para renderizar el gráfico
    const chartElement = screen.getByRole('img')
    expect(chartElement).not.toBeNull()
  })
})