import styled from 'styled-components'

interface CartPropsStyle {
  quantity?: string
}

export const ShoppingCartContainer = styled.button<CartPropsStyle>`
  width: 3rem;
  height: 3rem;
  border-radius: 6px;

  outline: none;
  border: 0;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.product['yellow-light']};
  color: ${(props) => props.theme.product['yellow-dark']};

  position: relative;

  &::after {
    content: ${(props) => `${props.quantity ? `"${props.quantity}"` : ''}`};
    width: 20px;
    height: 20px;
    top: -2px;
    right: -8px;

    border-radius: 9999px;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    font-weight: bold;

    background: ${(props) => props.theme.product['yellow-dark']};
    color: ${(props) => props.theme.base.white};
  }
`
