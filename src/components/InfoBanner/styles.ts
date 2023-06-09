import styled from 'styled-components'

export const BannerContainer = styled.section`
  width: 100%;
  height: 38rem;
  padding: 6rem 10rem;

  display: flex;
  z-index: 1;

  position: relative;
`

export const BannerBackground = styled.div`
  width: 100%;
  height: 38rem;
  top: 0;
  left: 0;

  position: absolute;
  z-index: -1;
  filter: blur(16px);
`

export const BannerInfos = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > div > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;

    max-width: 700px;

    color: ${(props) => props.theme.base['base-title']};
  }

  & > div > p {
    font-size: 20px;
    line-height: 130%;
  }
`

export const BannerLogo = styled.div`
  flex: 2;

  & > img {
    width: 28rem;
    height: 22rem;
    object-fit: contain;
  }
`
export const BannerItems = styled.div`
  width: 100%;
  height: 6rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  & > div {
    background: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
  }

  & > p {
    font-size: 1rem;
    line-height: 130%;
  }
`
