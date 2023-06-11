import {
  DetailsOrderInfos,
  PageSuccessContainer,
  SuccessDetailsOrder,
  SuccessHeader,
} from './styles'
import EntregadorImg from '../../assets/EntregadorImage.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function SucessPage() {
  return (
    <PageSuccessContainer>
      <SuccessHeader>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessDetailsOrder>
        <div>
          <DetailsOrderInfos>
            <section style={{ backgroundColor: defaultTheme.product.purple }}>
              <MapPin size={16} weight="fill" color="white" />
            </section>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </DetailsOrderInfos>
          <DetailsOrderInfos>
            <section style={{ backgroundColor: defaultTheme.product.yellow }}>
              <Timer size={16} weight="fill" color="white" />
            </section>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20min - 30min</strong>
              </p>
            </div>
          </DetailsOrderInfos>
          <DetailsOrderInfos>
            <section
              style={{ backgroundColor: defaultTheme.product['yellow-dark'] }}
            >
              <CurrencyDollar size={16} weight="fill" color="white" />
            </section>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </DetailsOrderInfos>
        </div>
        <img src={EntregadorImg} alt="" />
      </SuccessDetailsOrder>
    </PageSuccessContainer>
  )
}
