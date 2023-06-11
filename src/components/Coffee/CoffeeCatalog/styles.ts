import styled from 'styled-components'

export const CoffeeCatalogContainer = styled.div`
  max-width: 16rem;
  height: 20rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  gap: 1rem;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme.base['base-card']};
  position: relative;

  & > img {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;

    top: -2.5rem;
  }
`

export const CoffeeCatalogMid = styled.section`
  width: 100%;
  height: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  gap: 0.7rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    padding: 0.2rem;
  }

  & > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 800;
  }

  & > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.base['base-label']};
    line-height: 130%;
    text-align: center;
  }
`

export const CoffeeCatalogFooter = styled.footer`
  width: 100%;
  max-height: 2.375rem;

  display: flex;
  align-items: center;

  justify-content: center;
  gap: 0.5rem;
`

export const CoffeeFooterPrice = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.base['base-text']};

  & > strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 800;
  }
`
