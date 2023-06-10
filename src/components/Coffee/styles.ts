import styled from 'styled-components'

interface CoffeeFilterProps {
  $invisibly?: boolean
  $variant: 'primary' | 'secondary'
}

export const CoffeeListContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 10rem;
`
export const CoffeeListHeader = styled.nav`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;

    color: ${(props) => props.theme.base['base-subtitle']};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`
export const CofeeListFilter = styled.button<CoffeeFilterProps>`
  padding: 0.3rem 0.6rem;
  max-width: 8rem;
  max-width: 8rem;

  display: ${(props) => `${props.$invisibly ? 'none' : 'flex'}`};
  /* display: flex; */
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.$variant === 'primary'
      ? 'transparent'
      : props.theme.product['yellow-light']};
  border-radius: 9999px;

  border: 1px solid
    ${(props) =>
      props.$variant === 'primary'
        ? props.theme.product.yellow
        : props.theme.product['yellow-light']};
  color: ${(props) => props.theme.product['yellow-dark']};

  font-size: 12px;
  line-height: 130%;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.$variant === 'primary' ? props.theme.product['yellow-dark'] : ''};
    color: ${(props) =>
      props.$variant === 'primary' ? props.theme.base.white : ''};
    opacity: ${(props) => props.$variant === 'primary' && '0.8'};
    transition: all 0.2s ease-in-out;
  }
`
