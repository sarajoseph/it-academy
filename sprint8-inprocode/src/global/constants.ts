import { WeeklyExpensesContextProps } from './types'

export const weeksData: number[][] = []
weeksData[0] = [200, 59, 7.4, 83, 273.23, 437.84, 350.05]
weeksData[1] = [300, 250, 200, 150, 100, 50, 10]
weeksData[2] = [10, 30, 100, 250, 400, 450, 500]

export const InitialContext: WeeklyExpensesContextProps = {
  weekData: [],
  setWeekData: () => {},
  currentDay: 0,
  setCurrentDay: () => {},
  currentWeek: 0,
  setCurrentWeek: () => {},
  totalBalance: 0,
  setTotalBalance: () => {},
  todayExpenses: 0,
  setTodayExpenses: () => {},
  percentageDiff: '0',
  setPercentageDiff: () => {},
  maxPrevWeek: 0
}