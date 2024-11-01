import { weeksData } from '../global/constants'

export const usePercentage = (weekData: number[], currentDay: number): string => {
  const previousDay = currentDay === 0 ? 6 : currentDay-1
  // Si es lunes el porcentaje se ha de calcular con los gastos del domingo de la semana anterior
  const previousDayValue = weekData[previousDay] ?? weeksData[1][6]
  const diff = weekData[currentDay] - previousDayValue
  const percentage = ((diff / previousDayValue) * 100).toFixed(1)
  return percentage
}