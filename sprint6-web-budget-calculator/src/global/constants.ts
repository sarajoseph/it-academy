import { ProductsProps } from "./types"

export const products: ProductsProps = [
  {
    'id': 'product01',
    'name': 'Seo',
    'description': 'Programació d\'una web responsive completa',
    'price': 300,
    'selected': false
  },
  {
    'id': 'product02',
    'name': 'Ads',
    'description': 'Programació d\'una web responsive completa',
    'price': 400,
    'selected': false
  },
  {
    'id': 'product03',
    'name': 'Web',
    'description': 'Programació d\'una web responsive completa',
    'price': 500,
    'selected': false,
    'pages': 1,
    'languages': 1
  },
]
export const initialProducts: ProductsProps = [
  {
    'id': 'product01',
    'name': 'Seo',
    'description': 'Programació d\'una web responsive completa',
    'price': 300,
    'selected': false
  },
  {
    'id': 'product02',
    'name': 'Ads',
    'description': 'Programació d\'una web responsive completa',
    'price': 400,
    'selected': false
  },
  {
    'id': 'product03',
    'name': 'Web',
    'description': 'Programació d\'una web responsive completa',
    'price': 500,
    'selected': false,
    'pages': 1,
    'languages': 1
  },
]
export const WEB_PRODUCT_ID: string = 'product03'
export const TOTAL_ASCENDING: string = 'total_ascending'
export const TOTAL_DESCENDING: string = 'total_descending'
export const DATE_ASCENDING: string = 'date_ascending'
export const DATE_DESCENDING: string = 'date_descending'
export const NAME_ASCENDING: string = 'name_ascending'
export const NAME_DESCENDING: string = 'name_descending'