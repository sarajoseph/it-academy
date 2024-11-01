/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

export const PaymentType = () => {
  const {setAnnualPayment} = useContext(CalculatorContext)
  return (
    <section className="flex flex-row max-w-3xl mx-auto justify-between sm:justify-center mt-6 gap-x-5 font-bold">
      <span>Pagament mensual</span>
      <input type="checkbox" className="toggle toggle-primary" onChange={(e) => setAnnualPayment(e.target.checked)} />
      <span>Pagament anual</span>
    </section>
  )
}
