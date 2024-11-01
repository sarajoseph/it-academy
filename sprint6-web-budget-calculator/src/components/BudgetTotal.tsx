/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

export const BudgetTotal = () => {
  const { totalBudget } = useContext(CalculatorContext)
  return (
    <div className="flex flex-wrap flex-col md:flex-row items-end md:justify-end gap-y-2 md:gap-y-0 md:gap-x-10 font-bold">
      <span className="text-3xl">Preu pressuposat:</span>
      <span className="text-5xl">{totalBudget}€</span>
    </div>
  )
}
