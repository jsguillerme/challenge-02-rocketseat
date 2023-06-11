import { InputHTMLAttributes } from 'react'
import { InputDiv, InputTextContainer } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  optional?: boolean
}

export function InputText({ placeholder, optional, ...props }: InputTextProps) {
  return (
    <InputDiv>
      <InputTextContainer placeholder={placeholder} type="text" {...props} />
      {optional && <p>Optional</p>}
    </InputDiv>
  )
}
