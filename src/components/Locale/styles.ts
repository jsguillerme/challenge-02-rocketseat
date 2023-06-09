import styled from 'styled-components'

export const LocaleInfoContainer = styled.div`
  width: 10rem;
  height: 3rem;

  border-radius: 6px;
  background: ${(props) => props.theme.product['purple-light']};
  color: ${(props) => props.theme.product['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  font-size: 14px;
  line-height: 130%;
`
