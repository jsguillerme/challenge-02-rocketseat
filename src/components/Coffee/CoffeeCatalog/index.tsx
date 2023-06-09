import {
  CoffeeCatalogContainer,
  CoffeeCatalogFooter,
  CoffeeCatalogMid,
  CoffeeFooterPrice,
} from './styles'
import { CofeeListFilter } from '../styles'
import { ButtonIcon } from '../../Button/JustIcon'
import { ShoppingCart } from 'phosphor-react'
import { InputCounter } from '../Input'

export interface CoffeeCatalogProps {
  id: string
  path: string
  name: string
  description: string
  tags: String[]
}

export function CoffeeCatalog({
  id,
  path,
  description,
  tags,
  name,
}: CoffeeCatalogProps) {
  return (
    <CoffeeCatalogContainer>
      <img
        src={path}
        alt="Imagem de um café tradicional, preto com xicara branca visto de cima"
      />

      <CoffeeCatalogMid>
        <div>
          {tags.map((tag) => (
            // eslint-disable-next-line react/jsx-key
            <CofeeListFilter $variant="secondary">
              {tag.toUpperCase().trim()}
            </CofeeListFilter>
          ))}
        </div>

        <h2>{name}</h2>
        <p>{description}</p>
      </CoffeeCatalogMid>

      <CoffeeCatalogFooter>
        <CoffeeFooterPrice>
          R$ <strong>9,90</strong>
        </CoffeeFooterPrice>
        <InputCounter $counter={0} />
        <ButtonIcon icon={<ShoppingCart size={24} weight="fill" />} />
      </CoffeeCatalogFooter>
    </CoffeeCatalogContainer>
  )
}
