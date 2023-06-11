import styled from 'styled-components'

export const InputDiv = styled.div`
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.base['base-input']};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.base['base-input']};

  position: relative;

  & > p {
    position: absolute;
    right: 18px;
    color: ${(props) => props.theme.base['base-label']};
    font-size: 0.875rem;
    font-style: italic;
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.product['yellow-dark']};
  }
`

export const InputTextContainer = styled.input`
  width: 80%;
  height: fit-content;

  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${(props) => props.theme.base['base-input']};
  outline: 0;
  border-radius: 4px;

  background: ${(props) => props.theme.base['base-input']};
  color: ${(props) => props.theme.base['base-text']};
  font-size: 0.875rem;
  line-height: 130%;

  &::placeholder {
    color: ${(props) => props.theme.base['base-label']};
  }
`
