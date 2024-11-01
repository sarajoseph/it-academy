import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { usePercentage } from '../hooks/usePercentage'
import { InitialContext, weeksData } from '../global/constants'
import { useDay } from '../hooks/useDay'
import { useTotalBalance } from '../hooks/useTotalBalance'
import { WeeklyExpensesContextProps } from '../global/types'

export const WeeklyExpensesContext = createContext<WeeklyExpensesContextProps>(InitialContext)

export const WeeklyExpensesProvider = ({children}: {children: ReactNode}) => {
  const [currentWeek, setCurrentWeek] = useState<number>(0)
  const [currentDay, setCurrentDay] = useState<number>(useDay())
  if (currentWeek === 0) {
    // En la semana actual no mostrar datos del futuro
    weeksData[currentWeek].splice(currentDay+1)
  }
  const [weekData, setWeekData] = useState<number[]>(weeksData[currentWeek])
  const defaultTotalBalance: number = useTotalBalance(weekData)
  const [totalBalance, setTotalBalance] = useState<number>(defaultTotalBalance)
  const [todayExpenses, setTodayExpenses] = useState<number>(weekData[currentDay])
  const percentage: string = usePercentage(weekData, currentDay)
  const [percentageDiff, setPercentageDiff] = useState<string>(percentage)
  const maxPrevWeek: number = weeksData.length - 1

  useEffect(() => {
    setTotalBalance(defaultTotalBalance)
  }, [defaultTotalBalance])

  const dataContext = useMemo(() => (
    {
      weekData,
      setWeekData,
      currentDay,
      setCurrentDay,
      currentWeek,
      setCurrentWeek,
      totalBalance,
      setTotalBalance,
      todayExpenses,
      setTodayExpenses,
      percentageDiff,
      setPercentageDiff,
      maxPrevWeek
    }
  ), [
    weekData,
    currentDay,
    currentWeek,
    totalBalance,
    todayExpenses,
    percentageDiff,
    maxPrevWeek
  ])

  return (
    <WeeklyExpensesContext.Provider value={dataContext}>
      {children}
    </WeeklyExpensesContext.Provider>
  )
}