import { Dispatch, SetStateAction } from 'react'

export type WeeklyExpensesContextProps = {
  weekData: number[]
  setWeekData: Dispatch<SetStateAction<number[]>>
  currentDay: number
  setCurrentDay: Dispatch<SetStateAction<number>>
  currentWeek: number
  setCurrentWeek: Dispatch<SetStateAction<number>>
  totalBalance: number
  setTotalBalance: Dispatch<SetStateAction<number>>
  todayExpenses: number
  setTodayExpenses: Dispatch<SetStateAction<number>>
  percentageDiff: string
  setPercentageDiff: Dispatch<SetStateAction<string>>
  maxPrevWeek: number
}