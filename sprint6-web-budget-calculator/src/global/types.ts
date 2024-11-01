/* eslint-disable @typescript-eslint/no-explicit-any */
export type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  selected: boolean;
  pages?: number;
  languages?: number;
}
export type ProductsProps = ProductProps[]
export type BudgetListProps = {
  id: string
  userData: {
    name: string
    phone: number
    email: string
  }
  products: {
    id: string
    name: string
    pages?: number
    languages?: number
  }[]
  total: number
}[]
export type QuantityInputProps = {
  qnty_npt_id: string
  label: string
}
export type sortMethodsProps = {
  none: {
    method: () => null
  }
  total_ascending: {
    method: (a: any, b: any) => number
  }
  total_descending: {
    method: (a: any, b: any) => number
  }
  date_ascending: {
    method: (a: any, b: any) => 1 | -1
  }
  date_descending: {
    method: (a: any, b: any) => 1 | -1
  }
  name_ascending: {
    method: (a: any, b: any) => 1 | -1
  }
  name_descending: {
    method: (a: any, b: any) => 1 | -1
  }
}