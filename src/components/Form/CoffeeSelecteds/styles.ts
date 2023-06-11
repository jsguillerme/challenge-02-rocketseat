import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  width: 448px;
  max-width: 448px;
  height: 100%;

  margin: 2.5rem 10rem;

  & > h3 {
    color: ${(props) => props.theme.base['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;

    margin-bottom: 1rem;
  }
`

export const CoffeeSelectedsList = styled.div`
  max-width: 448px;
  height: 500px;
  background: ${(props) => props.theme.base['base-card']};
  padding: 2.5rem;

  border-radius: 6px 44px 6px 44px;

  & > hr {
    margin: 1.5rem 0;
    background-color: #dddddd;
    max-width: 368px;
    border: 1px solid ${(props) => props.theme.base['base-button']};
  }
`

export const CoffeeList = styled.section`
  max-height: 235px;
  margin-bottom: 1.5rem;

  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.2rem;
    border-radius: 9999px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.product.yellow};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.product['yellow-dark']};
    border-radius: 9999px;
  }

  & > hr {
    margin: 1.5rem 0;
    background-color: #dddddd;
    max-width: 368px;
    border: 1px solid ${(props) => props.theme.base['base-button']};
  }
`
export const CoffeeDetailsPrice = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  & > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      & > p {
        font-size: 14px;
        color: ${(props) => props.theme.base['base-text']};
      }
    }
  }
`

export const CoffeeDetailsPriceTotal = styled.p`
  font-weight: bold !important;

  font-size: 20px !important;
  line-height: 130% !important;
  color: ${(props) => props.theme.base['base-subtitle']} !important;
`
