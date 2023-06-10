import { CoffeeCatalog } from './CoffeeCatalog'
import {
  CofeeListFilter,
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListMiddle,
} from './styles'

import { coffees } from '../../fixtures/coffees.ts'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>

        <div>
          <CofeeListFilter $variant="primary">TRADICIONAL</CofeeListFilter>
          <CofeeListFilter $variant="primary">ESPECIAL</CofeeListFilter>
          <CofeeListFilter $variant="primary">COM LEITE</CofeeListFilter>
          <CofeeListFilter $variant="primary">ALCOÓLICO</CofeeListFilter>
          <CofeeListFilter $variant="primary">GELADO</CofeeListFilter>
        </div>
      </CoffeeListHeader>

      <CoffeeListMiddle>
        {coffees.map((coffee) => {
          return (
            <CoffeeCatalog
              id={coffee.id}
              description={coffee.description}
              name={coffee.name}
              tags={coffee.tags}
              path={coffee.path}
              key={coffee.id}
            />
          )
        })}
      </CoffeeListMiddle>
    </CoffeeListContainer>
  )
}
