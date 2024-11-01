import { useEffect, useContext } from 'react'
import { weeksData } from '../global/constants'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'

export const useWeek = () => {
  const {
    setWeekData,
    currentWeek,
    setCurrentWeek,
    maxPrevWeek
  } = useContext(WeeklyExpensesContext)

  useEffect(() => {
    setWeekData(weeksData[currentWeek])
  }, [currentWeek, setWeekData])

  const displayPrevWeek = () => {
    if (currentWeek < maxPrevWeek) {
      setCurrentWeek((prev: number) => prev + 1)
    }
  }

  const displayNextWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek((prev: number) => prev - 1)
    }
  }

  return {
    displayPrevWeek,
    displayNextWeek
  }
}