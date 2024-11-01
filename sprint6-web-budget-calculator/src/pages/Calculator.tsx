/* eslint-disable react/react-in-jsx-scope */
import { Header } from '../components/Header'
import { ProductsList } from '../components/ProductsList'
import { BudgetTotal } from '../components/BudgetTotal'
import { CalculatorProvider } from '../context/CalculatorContext'
import { Link } from 'react-router-dom'
import { BudgetRequest } from '../components/BudgetRequest'
import { BudgetList } from '../components/BudgetList'
import { InfoDialog } from '../components/modals/InfoDialog'
import { PaymentType } from '../components/PaymentType'
export const Calculator = () => {
  return (
    <>
      <CalculatorProvider>
        <Header />
        <main className="px-5">
          <section className="flex flex-row max-w-3xl mx-auto mt-6">
            <Link to="/" className="btn btn-neutral text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </Link>
          </section>
          <PaymentType />
          <section className="flex flex-col gap-y-10 max-w-3xl mx-auto my-20">
            <ProductsList />
            <BudgetTotal />
          </section>
          <BudgetRequest />
          <BudgetList />
          <InfoDialog />
        </main>
      </CalculatorProvider>
    </>
  )
}
