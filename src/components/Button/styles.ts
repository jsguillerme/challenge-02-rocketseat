import styled from 'styled-components'

export const ButtonContainerBase = styled.button`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  line-height: 160%;
  font-size: 0.875rem;

  cursor: pointer;
  color: ${(props) => props.theme.base.white};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const ButtonPrimary = styled(ButtonContainerBase)`
  background-color: ${(props) => props.theme.product.yellow};
  max-height: 2.875rem;

  &:hover {
    background-color: ${(props) => props.theme.product['yellow-dark']};
    transition: all 0.2s ease-in-out;
  }
`
export const ButtonSecondary = styled(ButtonContainerBase)`
  font-weight: normal;
  background-color: ${(props) => props.theme.base['base-button']};
  color: ${(props) => props.theme.base['base-text']};

  &:hover {
    color: ${(props) => props.theme.base['base-subtitle']};
    background-color: ${(props) => props.theme.base['base-hover']};
    transition: all 0.2s ease-in-out;
  }
`
export const IconStyleButton = styled.div`
  color: ${(props) => props.theme.product.purple};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.product['purple-dark']};
  }
`
