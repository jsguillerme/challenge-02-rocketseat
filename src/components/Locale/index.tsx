import { MapPin } from 'phosphor-react'
import { LocaleInfoContainer } from './styles'

interface LocaleInfoProps {
  locale: string | 'Ceará'
}

export function LocaleInfo({ locale }: LocaleInfoProps) {
  return (
    <LocaleInfoContainer>
      <MapPin weight="fill" size={22} />
      <p>{locale}</p>
    </LocaleInfoContainer>
  )
}
