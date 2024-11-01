/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import { getBudgetList } from '../logic/app'
import { ProductProps } from '../global/types'
export const BudgetRequest = () => {
  const { selectedProducts, totalBudget, budgetList, setBudgetList, annualPayment } = useContext(CalculatorContext)
  const [ nameEmptyClass, setNameEmptyClass ] = useState('')
  const [ phoneEmptyClass, setPhoneEmptyClass ] = useState('')
  const [ emailEmptyClass, setEmailEmptyClass ] = useState('')
  const handleClick = () => {
    const userName = (document.getElementById('budgetRequestName') as HTMLInputElement).value
    const userPhone = (document.getElementById('budgetRequestPhone') as HTMLInputElement).value
    const userEmail = (document.getElementById('budgetRequestEmail') as HTMLInputElement).value
    if (userName.trim() !== '' && userPhone.trim() !== '' && userEmail.trim() !== '') {
      const newBudgetList = getBudgetList(selectedProducts, totalBudget, budgetList, userName, userPhone, userEmail, annualPayment)
      setBudgetList(newBudgetList)
    } else {
      setEmptyInput()
    }
  }
  const setEmptyInput = () => {
    const userName = (document.getElementById('budgetRequestName') as HTMLInputElement).value
    const userPhone = (document.getElementById('budgetRequestPhone') as HTMLInputElement).value
    const userEmail = (document.getElementById('budgetRequestEmail') as HTMLInputElement).value
    userName.trim() === '' ? setNameEmptyClass('input-error') : setNameEmptyClass('')
    userPhone.trim() === '' ? setPhoneEmptyClass('input-error') : setPhoneEmptyClass('')
    userEmail.trim() === '' ? setEmailEmptyClass('input-error') : setEmailEmptyClass('')
  }
  return (
    <>
    {
      selectedProducts.some((product: ProductProps) => product.selected === true) &&
      <section className="flex flex-col gap-y-10 max-w-3xl mx-auto my-20">
        <div className="p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5">Demanar pressupost</h2>
          <div className="flex flex-row flex-wrap gap-2 max-w-full">
            <label className={`input input-bordered flex items-center gap-2 w-full max-w-full md:max-w-[23%] md:flex-1 ${nameEmptyClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              <input type="text" placeholder="Nom" className="w-full" id="budgetRequestName" onChange={() => setEmptyInput()} />
            </label>
            <label className={`input input-bordered flex items-center gap-2 w-full max-w-full md:max-w-[23%] md:flex-1 ${phoneEmptyClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <input type="text" placeholder="Telèfon" className="w-full" id="budgetRequestPhone" onChange={() => setEmptyInput()} />
            </label>
            <label className={`input input-bordered flex items-center gap-2 w-full max-w-full md:max-w-[23%] md:flex-1 ${emailEmptyClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <input type="text" placeholder="Email" className="w-full" id="budgetRequestEmail" onChange={() => setEmptyInput()} />
            </label>
            <button className="btn btn-primary flex items-center w-full max-w-full md:max-w-[30%] md:flex-1" onClick={() => handleClick() }>
              Solicitar pressupost
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    }
    </>
  )
}