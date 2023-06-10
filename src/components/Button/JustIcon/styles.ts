import styled from 'styled-components'
import { ButtonContainerBase } from '../styles'

export const ButtonIconContainer = styled(ButtonContainerBase)`
  width: 3rem;
  height: 3rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.product['purple-dark']};
  color: ${(props) => props.theme.base.white};

  &:hover {
    background-color: ${(props) => props.theme.product.purple};
    transition: all 0.3s ease-in-out;
  }
`
