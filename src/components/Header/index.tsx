import { HeaderActions, HeaderContainer } from './styles'
import logoCoffee from '../../assets/LogoCoffee.png'
import { LocaleInfo } from '../Locale'
import { Cart } from '../Cart'

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Logo Coffee Delivery" />

      <HeaderActions>
        <LocaleInfo locale="Fortaleza, CE" />
        <Cart />
      </HeaderActions>
    </HeaderContainer>
  )
}
