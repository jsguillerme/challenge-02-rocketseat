import { Minus, Plus } from 'phosphor-react'
import { InputContainer } from './styles'
import { InputHTMLAttributes } from 'react'

interface InputCounterProps extends InputHTMLAttributes<HTMLInputElement> {
  $counter: number
  $maxValue?: number
}

export function InputCounter({
  $counter = 0,
  $maxValue,
  ...props
}: InputCounterProps) {
  return (
    <InputContainer>
      <button>
        <Minus weight="bold" />
      </button>
      <input type="number" value={$counter} {...props} max={$maxValue} />
      <button>
        <Plus weight="bold" />
      </button>
    </InputContainer>
  )
}
