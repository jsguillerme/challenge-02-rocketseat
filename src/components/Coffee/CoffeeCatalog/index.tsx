import {
  CoffeeCatalogContainer,
  CoffeeCatalogFooter,
  CoffeeCatalogMid,
  CoffeeFooterPrice,
} from './styles'
import CoffeeTradicionalImg from '../../../assets/coffee-images/Image-1.svg'
import { CofeeListFilter } from '../styles'
import { ButtonIcon } from '../../Button/JustIcon'
import { ShoppingCart } from 'phosphor-react'
import { InputCounter } from '../Input'

export function CoffeeCatalog() {
  return (
    <CoffeeCatalogContainer>
      <img
        src={CoffeeTradicionalImg}
        alt="Imagem de um café tradicional, preto com xicara branca visto de cima"
      />

      <CoffeeCatalogMid>
        <CofeeListFilter $variant="secondary">TRADICIONAL</CofeeListFilter>

        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeCatalogMid>

      <CoffeeCatalogFooter>
        <CoffeeFooterPrice>
          R$ <strong>9,90</strong>
        </CoffeeFooterPrice>
        <InputCounter />
        <ButtonIcon icon={<ShoppingCart size={24} weight="fill" />} />
      </CoffeeCatalogFooter>
    </CoffeeCatalogContainer>
  )
}
