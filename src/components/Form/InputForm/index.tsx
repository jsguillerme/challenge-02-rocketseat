import { InputDiv, InputTextContainer } from './styles'

interface InputTextProps {
  placeholder: string
  optional?: boolean
}

export function InputText({ placeholder, optional }: InputTextProps) {
  return (
    <InputDiv>
      <InputTextContainer placeholder={placeholder} type="text" />
      {optional && <p>Optional</p>}
    </InputDiv>
  )
}
