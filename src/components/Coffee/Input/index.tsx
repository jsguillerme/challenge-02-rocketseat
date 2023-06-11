import { Minus, Plus } from 'phosphor-react'
import { InputContainer } from './styles'
import { InputHTMLAttributes, useState } from 'react'

interface InputCounterProps extends InputHTMLAttributes<HTMLInputElement> {
  $counter: number
  $maxValue?: number
}

export function InputCounter({
  $counter = 0,
  $maxValue,
  ...props
}: InputCounterProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)

  function handleCounterIncrement() {
    setCoffeeQuantity((state) => {
      return state + 1
    })
  }

  function handleCounterDecrement() {
    setCoffeeQuantity((state) => {
      if (state <= 0) {
        return 0
      }
      return state - 1
    })
  }

  return (
    <InputContainer>
      <button onClick={handleCounterDecrement}>
        <Minus weight="bold" />
      </button>
      <input
        type="number"
        value={coffeeQuantity}
        {...props}
        max={$maxValue}
        onChange={(e) => setCoffeeQuantity(Number(e.target.value))}
      />
      <button onClick={handleCounterIncrement}>
        <Plus weight="bold" />
      </button>
    </InputContainer>
  )
}
