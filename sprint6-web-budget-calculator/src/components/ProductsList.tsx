/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react'
import { Product } from './Product'
import { CalculatorContext } from '../context/CalculatorContext'
import { ProductProps } from '../global/types'

export const ProductsList = () => {
  const { selectedProducts } = useContext(CalculatorContext)
  return (
    <>
      {
        selectedProducts.map((product: ProductProps) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              selected={product.selected}
            />
          )
        })
      }
    </>
  )
}
