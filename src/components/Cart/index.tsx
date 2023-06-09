import { ShoppingCart } from 'phosphor-react'
import { ShoppingCartContainer } from './styles'

interface ShoppingCartProps {
  quantity?: string
}

export function Cart({ quantity }: ShoppingCartProps) {
  return (
    <ShoppingCartContainer quantity={quantity}>
      <ShoppingCart size={22} weight="fill" />
    </ShoppingCartContainer>
  )
}
