import { CoffeeCatalog } from './CoffeeCatalog'
import {
  CofeeListFilter,
  CoffeeListContainer,
  CoffeeListHeader,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>

        <div>
          <CofeeListFilter $variant="secondary">TRADICIONAL</CofeeListFilter>
          <CofeeListFilter $variant="primary">ESPECIAL</CofeeListFilter>
          <CofeeListFilter $variant="primary">COM LEITE</CofeeListFilter>
          <CofeeListFilter $variant="primary">ALCOÓLICO</CofeeListFilter>
          <CofeeListFilter $variant="primary">GELADO</CofeeListFilter>
        </div>
      </CoffeeListHeader>

      <CoffeeCatalog />
    </CoffeeListContainer>
  )
}
