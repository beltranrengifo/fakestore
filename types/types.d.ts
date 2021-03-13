export type Nullable<T> = T | undefined | null

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}
export interface Products {
  array: Product
}
