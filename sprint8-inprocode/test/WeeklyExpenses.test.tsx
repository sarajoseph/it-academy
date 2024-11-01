import React from 'react'
import { WeeklyExpenses } from '../src/components/WeeklyExpenses'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

// Mock del módulo 'react-i18next'
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations = {
        'chart.title_prev_week1': 'Previous Week: ',
        'chart.title_prev_week2_plural': ' weeks ago',
        'chart.title_prev_week2_singular': ' week ago',
        'chart.title': 'Current Week',
        'today_expenses': 'Today\'s Expenses',
        'compared_to_yesterday': 'Compared to yesterday'
      }
      return translations[key] || key
    },
  }),
}))

const mockContextValue = {
  currentWeek: 2,
  todayExpenses: 50,
  percentageDiff: '10',
  weekData: [],
  setWeekData: () => {},
  currentDay: 0,
  setCurrentDay: () => {},
  setCurrentWeek: () => {},
  totalBalance: 0,
  setTotalBalance: () => {},
  setTodayExpenses: () => {},
  setPercentageDiff: () => {},
  maxPrevWeek: 0
}

// REQUIRED: Import React to the component is required for testing
describe('WeeklyExpenses', () => {
  it('renders today\'s expenses and percentage difference correctly', () => {
    const percentageDiffSymbol = parseInt(mockContextValue.percentageDiff) > 0 ? '+' : ''

    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <WeeklyExpenses />
      </WeeklyExpensesContext.Provider>
    )

    expect(typeof mockContextValue.todayExpenses).toBe('number')
    expect(!isNaN(mockContextValue.todayExpenses)).toBe(true)
    expect(screen.getByText(mockContextValue.todayExpenses+' €')).not.toBeNull()

    expect(typeof mockContextValue.percentageDiff).toBe('string')
    expect(!isNaN(parseInt(mockContextValue.percentageDiff))).toBe(true)
    expect(screen.getByText(percentageDiffSymbol+mockContextValue.percentageDiff+'%')).not.toBeNull()
  })

  it('should render the component with correct translations', () => {
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <WeeklyExpenses />
      </WeeklyExpensesContext.Provider>
    )

    expect(screen.getByText((content) => content.includes('Previous Week: 2 weeks ago'))).not.toBeNull()
    expect(screen.getByText((content) => content.includes('Today\'s Expenses'))).not.toBeNull()
    expect(screen.getByText((content) => content.includes('50 €'))).not.toBeNull()
    expect(screen.getByText((content) => content.includes('+10%'))).not.toBeNull()
    expect(screen.getByText((content) => content.includes('Compared to yesterday'))).not.toBeNull()
  })
})
