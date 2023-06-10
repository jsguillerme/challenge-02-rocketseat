import { CoffeeList } from '../../components/Coffee'
import { HeaderComponent } from '../../components/Header'
import { InfoBanner } from '../../components/InfoBanner'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeaderComponent />
      <InfoBanner />
      <CoffeeList />
    </HomeContainer>
  )
}
