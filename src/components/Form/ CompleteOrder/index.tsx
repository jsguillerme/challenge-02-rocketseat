import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { defaultTheme } from '../../../styles/themes/default'
import { InputText } from '../InputForm'
import { Button } from '../../Button'
import {
  CompleteOrderContainer,
  FormContainer,
  FormContainerHeader,
  FormDataRequest,
  FormPaymentMethod,
  FormPaymentMethodActions,
  FormPaymentMethodHeader,
} from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <h3>Complete seu pedido</h3>

      <FormContainer>
        <FormContainerHeader>
          <MapPin size={22} color={defaultTheme.product['yellow-dark']} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormContainerHeader>

        <FormDataRequest>
          <div className="address-cep">
            <InputText placeholder="CEP" />
          </div>
          <div className="address-street">
            <InputText placeholder="Rua" />
          </div>
          <div className="address-number">
            <div className="ad-number">
              <InputText placeholder="Número" />
            </div>
            <div className="ad-complement">
              <InputText placeholder="Complemento" optional />
            </div>
          </div>
          <div className="address-country">
            <div className="ad-distric">
              <InputText placeholder="Bairro" />
            </div>
            <div className="ad-city">
              <InputText placeholder="Cidade" />
            </div>
            <div className="ad-state">
              <InputText placeholder="UF" />
            </div>
          </div>
        </FormDataRequest>
      </FormContainer>

      <FormPaymentMethod>
        <FormPaymentMethodHeader>
          <CurrencyDollar size={22} color={defaultTheme.product.purple} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </FormPaymentMethodHeader>

        <FormPaymentMethodActions>
          <Button
            $isSecondary
            $text="CARTÃO DE CRÉDITO"
            $icon={<CreditCard size={16} />}
          />
          <Button
            $isSecondary
            $text="CARTÃO DE DÉBITO"
            $icon={<Bank size={16} />}
          />
          <Button $isSecondary $text="DINHEIRO" $icon={<Money size={16} />} />
        </FormPaymentMethodActions>
      </FormPaymentMethod>
    </CompleteOrderContainer>
  )
}
