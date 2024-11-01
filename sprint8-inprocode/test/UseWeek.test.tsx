/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useWeek } from '../src/hooks/useWeek'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'
import { weeksData } from '../src/global/constants'
import React, { useState } from 'react'

// Mock WeeklyExpensesContext provider
const TestWrapper = ({ children, currentWeek, maxPrevWeek, setWeekData }: { children: React.ReactNode, currentWeek: number, maxPrevWeek: number, setWeekData: any }) => {
  const [week, setCurrentWeek] = useState(currentWeek)
  const contextValue = {
    currentWeek: week,
    setCurrentWeek: (fn: React.SetStateAction<number>) => {
      setCurrentWeek((prev) => {
        const newWeek = typeof fn === 'function' ? (fn as (prev: number) => number)(prev) : fn
        return newWeek
      })
    },
    setWeekData,
    maxPrevWeek,
    weekData: [],
    currentDay: 0,
    setCurrentDay: () => {},
    totalBalance: 0,
    setTotalBalance: () => {},
    todayExpenses: 0,
    setTodayExpenses: () => {},
    percentageDiff: '0',
    setPercentageDiff: () => {}
  }

  return (
    <WeeklyExpensesContext.Provider value={contextValue}>
      {children}
    </WeeklyExpensesContext.Provider>
  )
}

describe('useWeek Hook', () => {
  it('should set week data when currentWeek changes', () => {
    const setWeekData = vi.fn()
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TestWrapper currentWeek={0} maxPrevWeek={4} setWeekData={setWeekData}>
        {children}
      </TestWrapper>
    )

    const { result } = renderHook(() => useWeek(), { wrapper })

    expect(setWeekData).toHaveBeenCalledWith(weeksData[0])

    // Simular el cambio de la semana
    act(() => {
      result.current.displayPrevWeek()
    })

    expect(setWeekData).toHaveBeenCalledWith(weeksData[1])
  })

  it('should increment week on displayPrevWeek', () => {
    const setWeekData = vi.fn()
    let currentWeekValue = 0
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TestWrapper currentWeek={currentWeekValue} maxPrevWeek={4} setWeekData={setWeekData}>
        {children}
      </TestWrapper>
    )

    const { result, rerender } = renderHook(() => useWeek(), { wrapper })

    act(() => {
      result.current.displayPrevWeek()
      currentWeekValue++ // Simula el cambio de estado
      rerender() // Vuelve a renderizar el hook con el nuevo valor de currentWeek
    })

    // Verificamos que el currentWeek se haya incrementado
    expect(setWeekData).toHaveBeenCalledWith(weeksData[currentWeekValue])
  })

  it('should decrement week on displayNextWeek', () => {
    const setWeekData = vi.fn()
    let currentWeekValue = 1
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TestWrapper currentWeek={currentWeekValue} maxPrevWeek={4} setWeekData={setWeekData}>
        {children}
      </TestWrapper>
    )

    const { result, rerender } = renderHook(() => useWeek(), { wrapper })

    act(() => {
      result.current.displayNextWeek()
      currentWeekValue--
      rerender()
    })

    expect(setWeekData).toHaveBeenCalledWith(weeksData[currentWeekValue])
  })

  it('currentWeek should be lower than maxPrevWeek on displayPrevWeek', () => {
    const setWeekData = vi.fn()
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TestWrapper currentWeek={5} maxPrevWeek={4} setWeekData={setWeekData}>
        {children}
      </TestWrapper>
    )

    const { result } = renderHook(() => useWeek(), { wrapper })

    act(() => {
      result.current.displayPrevWeek()
    })

    expect(setWeekData).not.toHaveBeenCalled()
  })

  it('currentWeek should be greater than 0 on displayNextWeek', () => {
    const setWeekData = vi.fn()
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TestWrapper currentWeek={0} maxPrevWeek={4} setWeekData={setWeekData}>
        {children}
      </TestWrapper>
    )

    const { result } = renderHook(() => useWeek(), { wrapper })

    act(() => {
      result.current.displayNextWeek()
    })

    expect(setWeekData).not.toHaveBeenCalled()
  })
})
