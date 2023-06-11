import { Button } from '../../Button'
import { CoffeeCart } from '../../Coffee/CoffeeCart'
import {
  CoffeeDetailsPrice,
  CoffeeDetailsPriceTotal,
  CoffeeList,
  CoffeeSelectedContainer,
  CoffeeSelectedsList,
} from './styles'

export function CoffeeSelecteds() {
  return (
    <CoffeeSelectedContainer>
      <h3>Cafés selecionados</h3>

      <CoffeeSelectedsList>
        <CoffeeList>
          <CoffeeCart $quantity={2} />
          <hr />
          <CoffeeCart $quantity={1} />
          <hr />
          <CoffeeCart $quantity={3} />
        </CoffeeList>

        <CoffeeDetailsPrice>
          <section>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <CoffeeDetailsPriceTotal>Total</CoffeeDetailsPriceTotal>
              <CoffeeDetailsPriceTotal>R$ 33,20</CoffeeDetailsPriceTotal>
            </div>
          </section>
          <Button $text="CONFIRMAR PEDIDO" />
        </CoffeeDetailsPrice>
      </CoffeeSelectedsList>
    </CoffeeSelectedContainer>
  )
}
