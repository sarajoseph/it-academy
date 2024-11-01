/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from 'react'
import { getSelectedProducts } from '../logic/app'
import { CalculatorContext } from '../context/CalculatorContext'
import { Web } from './Web'
import { WEB_PRODUCT_ID } from '../global/constants'
import { ProductProps } from '../global/types'

export const Product = ({id, name, description, price}: ProductProps) => {
  const { selectedProducts, setSelectedProducts, annualPayment } = useContext(CalculatorContext)
  const [ borderClass, setBorderClass ] = useState('border-gray-100')
  const [ checkedProduct, setCheckedProduct ] = useState(false)
  const handleChange = (id: string, checked: boolean) => {
    const newSelectedProducts = getSelectedProducts(selectedProducts, id, checked)
    setSelectedProducts(newSelectedProducts)
    checked ? setBorderClass('border-solid border-primary') : setBorderClass('border-gray-100')
    setCheckedProduct(checked)
  }
  
  return (
    <div className={`p-10 rounded-2xl shadow-lg border-2 ${borderClass}`}>
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between gap-y-3 md:gap-y-0">
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p>{description}</p>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          {
          annualPayment && <span className="text-lg text-yellow-500 font-bold">Ahorra un 20%</span>
          }
          <div className="text-5xl font-bold">{price}€</div>
        </div>				
        <div className="form-control justify-center">
          <label className="cursor-pointer label justify-start">
            <input 
              type="checkbox" 
              className="checkbox [--chkbg:oklch(var(--p))] [--chkfg:oklch(var(--b1))]" 
              onChange={(e) => { handleChange(id, e.target.checked) }} 
            />
            <span className="label-text ml-2">Afegir</span>
          </label>
        </div>
      </div>
      {
        (checkedProduct && id === WEB_PRODUCT_ID) && <Web />
      }
    </div>
  )
}