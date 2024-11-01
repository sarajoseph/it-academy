/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import { getWebFields, openModal } from '../logic/app'
import { QuantityInputProps } from '../global/types'
export const QuantityInput = ({qnty_npt_id, label}: QuantityInputProps) => {
  const { selectedProducts, setSelectedProducts } = useContext(CalculatorContext)
  const setInputValue = (operation: string) => {
    const eQuantityInput: HTMLElement = document.getElementById(qnty_npt_id) as HTMLElement
    const input: HTMLInputElement = eQuantityInput.querySelector('input') as HTMLInputElement
    if (operation === 'addition') {
      input.value = (input.valueAsNumber + 1).toString()
    } else if (operation === 'substraction') {
      if(input.valueAsNumber > 1) {
        input.value = (input.valueAsNumber - 1).toString()
      }
    }
    input.setAttribute('value', input.value)
    input.addEventListener('change', () => {
      const newSelectedProducts = getWebFields(selectedProducts, qnty_npt_id, input.valueAsNumber)
      setSelectedProducts(newSelectedProducts)
    } )
    const event = new Event('change')
    input.dispatchEvent(event)
  }
  const openInfoDialog = (qnty_npt_id: string) => {
    const eInfoDialog: HTMLDialogElement = document.getElementById('infoDialog') as HTMLDialogElement
    (eInfoDialog.querySelector('h3') as HTMLElement ).innerHTML = qnty_npt_id === 'pages' ? 'Número de pàgines' : 'Número de llenguatges';
    (eInfoDialog.querySelector('p') as HTMLElement).innerHTML = qnty_npt_id === 'pages' ? 'Afegeix les pàgines que necessitis per dur a terme el teu projecte. El cost de cada pàgina es de 30€.' : 'Afegeix els llenguatges que tindrà el teu projecte. El cost de cada llenguatge es de 30€.'
    openModal(eInfoDialog)
  }
  return (
    <div id={qnty_npt_id} className="flex flex-row items-center gap-x-4">      
      <p className="w-full flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 cursor-pointer" onClick={() => openInfoDialog(qnty_npt_id)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
        {label}
      </p>
      <div className="flex flex-row gap-x-1">
        <button className="btn btn-circle btn-xs"
          onClick={() => setInputValue('substraction')}>➖</button>
        <input
          type="number"
          placeholder="1"
          className="input input-bordered input-xs w-12 focus:outline-none text-center"
          defaultValue="1"
          readOnly />
        <button className="btn btn-circle btn-xs"
          onClick={() => setInputValue('addition')}>➕</button>
      </div>
    </div>
  )
}