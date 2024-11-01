import { Bar } from 'react-chartjs-2'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'
import { useGraph } from '../hooks/useGraph'
import { useContext } from 'react'

export const Graph = () => {
  const { weekData, currentDay, currentWeek } = useContext(WeeklyExpensesContext)
  const day = currentWeek === 0 ? currentDay : null
  const { chartData, options } = useGraph(weekData, day)
  return (
    <Bar data={chartData} options={options} />
  )
}