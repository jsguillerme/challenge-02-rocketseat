import { ButtonPrimary, ButtonSecondary, IconStyleButton } from './styles'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSecondary?: boolean
  icon?: ReactNode
  text: string
}

export function Button({ isSecondary, text, icon, ...props }: ButtonProps) {
  return isSecondary ? (
    <ButtonSecondary {...props}>
      {text}
      {icon ? <IconStyleButton>icon</IconStyleButton> : null}
    </ButtonSecondary>
  ) : (
    <ButtonPrimary {...props}>{text}</ButtonPrimary>
  )
}
