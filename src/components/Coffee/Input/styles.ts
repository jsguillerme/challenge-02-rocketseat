import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.base['base-button']};
  border-radius: 6px !important;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    cursor: pointer;
    border: 0;
    outline: 0;
    background: ${(props) => props.theme.base['base-button']};

    width: 1.5rem;
    height: 2.375rem;

    color: ${(props) => props.theme.product.purple};

    &:hover {
      color: ${(props) => props.theme.product['purple-dark']};
      transition: all 0.3s ease-in-out;
    }
  }

  & > input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;

    border: 0;
    outline: 0;
    border-radius: 6px;

    color: ${(props) => props.theme.base['base-title']};

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 1.5rem;
    height: 2.375rem;

    background: ${(props) => props.theme.base['base-button']};
  }

  & > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
`
