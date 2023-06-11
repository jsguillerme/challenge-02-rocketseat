import styled from 'styled-components'

export const PageSuccessContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5rem 10rem;
`
export const SuccessHeader = styled.header`
  width: 80%;

  & > h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme.product['yellow-dark']};
    font-size: 2rem;
    line-height: 130%;
    font-weight: bold;
  }

  & > p {
    color: ${(props) => props.theme.base['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`
export const SuccessDetailsOrder = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2.5rem;

  & > div {
    width: 526px;
    height: 270px;
    padding: 2.5rem;

    border-radius: 6px 36px 6px 36px;
    border: 1px solid ${(props) => props.theme.product['yellow-dark']};

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const DetailsOrderInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  & > div > p {
    color: ${(props) => props.theme.base['base-text']};
    font-size: 1rem;
    line-height: 130%;
  }

  & > section {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9999px;
  }
`
