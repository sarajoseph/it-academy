/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom'
import { getDiscount, getTotalBudget } from '../logic/app'
import { WEB_PRODUCT_ID } from '../global/constants'
import { ProductsProps } from '../global/types'
export const BudgetUrl = () => {
  const { params } = useParams()
  const searchParams = new URLSearchParams(params)
  const annualParam = searchParams.has('annual') && searchParams.get('annual') !== 'false' ? true : false
  const product01Param = searchParams.has('product01') && searchParams.get('product01') !== 'false' ? true : false
  const product02Param = searchParams.has('product02') && searchParams.get('product02') !== 'false' ? true : false
  const product03Param = searchParams.has('product03') && searchParams.get('product03') !== 'false' ? true : false
  const budgetProducts: ProductsProps = [
    {
      'id': 'product01',
      'name': 'Seo',
      'description': 'Programació d\'una web responsive completa',
      'price': annualParam ? getDiscount(300) : 300,
      'selected': product01Param
    },
    {
      'id': 'product02',
      'name': 'Ads',
      'description': 'Programació d\'una web responsive completa',
      'price': annualParam ? getDiscount(400) : 400,
      'selected': product02Param
    },
    {
      'id': 'product03',
      'name': 'Web',
      'description': 'Programació d\'una web responsive completa',
      'price': annualParam ? getDiscount(500) : 500,
      'selected': product03Param,
      'pages': Number(searchParams.get('pages')) || 1,
      'languages': Number(searchParams.get('lang')) || 1
    },
  ]
  const totalBudget = getTotalBudget(budgetProducts)

  return (
    <main>
      <section className="flex flex-col max-w-3xl mx-auto justify-center h-screen">
        <div className="flex flex-row gap-5 max-w-full p-10 rounded-2xl shadow-lg">
          <div className="flex flex-col grow">
            <p className="font-bold">Serveis contractats:</p>
            <ul className="list-disc list-inside">
              {
                budgetProducts.filter((p) => p.selected === true).map((product) => {
                  return (
                    product.id === WEB_PRODUCT_ID ?
                      <li key={product.id}>{`${product.name} (${product.pages} pàgines, ${product.languages} llenguatges)`}</li>
                      :
                      <li key={product.id}>{product.name}</li>)
                })
              }
            </ul>
          </div>
          <div className="flex flex-col grow md:items-end">
            <p className="font-bold">Total:</p>
            <p className="text-5xl font-bold">{totalBudget}€</p>
          </div>
        </div>
      </section>
    </main>
  )
}