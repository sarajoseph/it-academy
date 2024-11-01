import { WEB_PRODUCT_ID } from '../global/constants'
import { BudgetListProps, ProductsProps, ProductProps, } from '../global/types'

export const getSelectedProducts = (selectedProducts: ProductsProps, productID: string, checked: boolean): ProductsProps => {
  const newSelectedProducts = selectedProducts.map((product: ProductProps) => {
    if (product.id === productID) {
      product.selected = checked
    }
    return product
  })
  return newSelectedProducts
}

export const getWebFields = (selectedProducts: ProductsProps, qnty_npt_id: string, inputNumber: number) => {
  const newSelectedProducts = selectedProducts.map((product: ProductProps) => {
    if (product.id === WEB_PRODUCT_ID) {
      product[<'pages' | 'languages'>qnty_npt_id] = inputNumber
    }
    return product
  })
  return newSelectedProducts
}

export const getTotalBudget = (selectedProducts: ProductsProps): number => {
  let newBudget = 0
  selectedProducts.map((product: ProductProps) => {
    if (product.selected === true) {
      newBudget += product.price
      if (product.id === WEB_PRODUCT_ID) {
        newBudget += ((product.pages || 1) + (product.languages || 1)) * 30
      }			
    }      
  })
  return newBudget
}

export const getBudgetList = (selectedProducts: ProductsProps, totalBudget: number, budgetList: BudgetListProps, userName: string, userPhone: string, userEmail: string, annualPayment: boolean) => {
  const budgetProducts = selectedProducts.filter((prod: ProductProps) => prod.selected === true)
  const currentBudgetID: string = budgetList === undefined ? 'budget_1' : 'budget_'+(budgetList.length+1)
  const url: string = getBudgetURL(budgetProducts, annualPayment)
  const currentBudget = {
    id: currentBudgetID,
    userData: {
      name: userName,
      phone: userPhone,
      email: userEmail
    },
    products: budgetProducts,
    total: totalBudget,
    url: url
  }
  const newBudgetList = budgetList !== undefined ? [...budgetList, currentBudget] : [currentBudget]
  return newBudgetList
}

export const getDiscount = (initialPrice: number) => initialPrice - (initialPrice * 0.20)

export const getBudgetURL = (budgetProducts: ProductsProps, budgetPayment: boolean) => {
  let url: string = '/budget/'
  budgetProducts.filter((prod: ProductProps) => prod.selected === true).map((product: ProductProps) => {
    url += product.id+'=true&'
    url += product.pages !== undefined ? 'pages='+product.pages+'&' : ''
    url += product.languages !== undefined ? 'lang='+product.languages+'&' : ''
  })
  url += budgetPayment ? 'annual=true' : ''
  url = url.charAt(url.length-1) === '&' ? url.substring(0, url.length - 1) : url
  return url
}

export const openModal = (e: HTMLDialogElement) => {
  e.showModal()
}