import { CompleteOrder } from './ CompleteOrder'
import { CoffeeSelecteds } from './CoffeeSelecteds'
import { FormContainer } from './styles'

export function FormularioCheckout() {
  return (
    <FormContainer>
      <CompleteOrder />
      <CoffeeSelecteds />
    </FormContainer>
  )
}
