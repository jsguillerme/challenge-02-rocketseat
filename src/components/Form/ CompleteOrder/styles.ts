import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  width: 100%;
  max-width: 640px;
  height: 100%;

  margin: 2.5rem 10rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h3 {
    color: ${(props) => props.theme.base['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }
`

export const FormContainer = styled.form`
  max-height: 372px;
  background: ${(props) => props.theme.base['base-card']};
  padding: 2.5rem;

  border-radius: 6px;
`

export const FormContainerHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;

  & > div > span {
    color: ${(props) => props.theme.base['base-subtitle']};
    line-height: 130%;
  }

  & > div > p {
    color: ${(props) => props.theme.base['base-text']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`
export const FormDataRequest = styled.main`
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > .address-cep {
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  & > .address-number {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > .ad-number {
      width: 40%;
    }

    & > .ad-complement {
      width: 60%;
    }
  }

  & > .address-country {
    width: 100%;
    display: flex;
    gap: 0.75rem;

    & > .ad-distric {
      width: 200px;
    }

    & > .ad-city {
      width: 276px;
    }

    & > .ad-state {
      width: 60px;
    }
  }
`

export const FormPaymentMethod = styled.footer`
  max-height: 372px;
  background: ${(props) => props.theme.base['base-card']};
  padding: 2.5rem;

  border-radius: 6px;
`

export const FormPaymentMethodHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;

  & > div > span {
    color: ${(props) => props.theme.base['base-subtitle']};
    line-height: 130%;
  }

  & > div > p {
    color: ${(props) => props.theme.base['base-text']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const FormPaymentMethodActions = styled.main`
  max-width: 560px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  & > button {
    font-size: 12px !important;
    line-height: 160%;
  }
`
