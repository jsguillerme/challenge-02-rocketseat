import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonIconContainer } from './styles'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export function ButtonIcon({ icon, ...props }: ButtonIconProps) {
  return <ButtonIconContainer {...props}>{icon}</ButtonIconContainer>
}
