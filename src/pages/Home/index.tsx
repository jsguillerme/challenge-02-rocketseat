import { CoffeeList } from '../../components/Coffee'
import { InfoBanner } from '../../components/InfoBanner'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <InfoBanner />
      <CoffeeList />
    </HomeContainer>
  )
}
