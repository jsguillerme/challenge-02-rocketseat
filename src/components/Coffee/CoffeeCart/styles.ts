import styled from 'styled-components'

export const CoffeeCartContainer = styled.div`
  width: 23rem;
  height: 5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.base['base-card']};

  & > img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeCartDetails = styled.section`
  width: 11rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 0.5rem;

  & > p {
    color: ${(props) => props.theme.base['base-subtitle']};
    font-size: 1rem;
    line-height: 130%;
  }

  & > div {
    max-width: 11rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.2rem;
  }
`
