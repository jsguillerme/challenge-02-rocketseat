import { CoffeeCartContainer, CoffeeCartDetails } from './styles'
import { Button } from '../../Button'
import { Trash } from 'phosphor-react'
import { InputCounter } from '../Input'
import CoffeeTradicionalImg from '../../../assets/coffee-images/Image-1.svg'
import { CoffeeFooterPrice } from '../CoffeeCatalog/styles'

export function CoffeeCart() {
  return (
    <CoffeeCartContainer>
      <img src={CoffeeTradicionalImg} alt="" />

      <CoffeeCartDetails>
        <p>Expresso Tradicional</p>
        <div>
          <InputCounter />
          <Button isSecondary text="REMOVER" icon={<Trash />} />
        </div>
      </CoffeeCartDetails>

      <CoffeeFooterPrice style={{ placeSelf: 'flex-start' }}>
        R$ <strong>9,90</strong>
      </CoffeeFooterPrice>
    </CoffeeCartContainer>
  )
}
