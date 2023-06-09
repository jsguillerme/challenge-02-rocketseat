import {
  BannerBackground,
  BannerContainer,
  BannerInfos,
  BannerItems,
  BannerLogo,
  Item,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import InfoCoffee from '../../assets/InfoCoffee.png'
import { defaultTheme } from '../../styles/themes/default'

import vector1 from '../../assets/banner-vectors/Vector-1.svg'
import vector2 from '../../assets/banner-vectors/Vector-2.svg'
import vector3 from '../../assets/banner-vectors/Vector-3.svg'
import vector4 from '../../assets/banner-vectors/Vector-4.svg'
import vector5 from '../../assets/banner-vectors/Vector-5.svg'
import vector6 from '../../assets/banner-vectors/Vector-6.svg'
import vector7 from '../../assets/banner-vectors/Vector-7.svg'
import vector8 from '../../assets/banner-vectors/Vector-8.svg'

export function InfoBanner() {
  return (
    <BannerContainer>
      <BannerBackground>
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={vector3} alt="" />
        <img src={vector4} alt="" />
        <img src={vector5} alt="" />
        <img src={vector6} alt="" />
        <img src={vector7} alt="" />
        <img src={vector8} alt="" />
      </BannerBackground>
      <BannerInfos>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <BannerItems>
          <Item color={defaultTheme.product['yellow-dark']}>
            <div>
              <ShoppingCart
                weight="fill"
                size={18}
                color={defaultTheme.base.white}
              />
            </div>
            <p>Compra simples e segura</p>
          </Item>
          <Item color={defaultTheme.base['base-text']}>
            <div>
              <Package
                weight="fill"
                size={18}
                color={defaultTheme.base.white}
              />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item color={defaultTheme.product.yellow}>
            <div>
              <Timer weight="fill" size={18} color={defaultTheme.base.white} />
            </div>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item color={defaultTheme.product.purple}>
            <div>
              <Coffee weight="fill" size={18} color={defaultTheme.base.white} />
            </div>
            <p>O café chega fresquinho até você</p>
          </Item>
        </BannerItems>
      </BannerInfos>
      <BannerLogo>
        <img
          src={InfoCoffee}
          alt="Imagem de um copo de café fechado, possuindo alguns detalhes no centro preto e a tampa preta. Na parte de trás, algumas sementes de café"
        />
      </BannerLogo>
    </BannerContainer>
  )
}
