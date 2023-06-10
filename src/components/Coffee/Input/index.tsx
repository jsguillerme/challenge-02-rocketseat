import { Minus, Plus } from 'phosphor-react'
import { InputContainer } from './styles'

export function InputCounter() {
  return (
    <InputContainer>
      <button>
        <Minus weight="bold" />
      </button>
      <input type="number" value={0} />
      <button>
        <Plus weight="bold" />
      </button>
    </InputContainer>
  )
}
