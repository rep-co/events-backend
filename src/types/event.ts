import { Price } from './price'

export interface EventItem {
  name: string
  date: Date
  description: string | undefined
  location: string | undefined
  price: Price | undefined
}
