import { ReactNode, createContext } from 'react'

interface CoffeeContextType {}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  return <CoffeeContext.Provider value={}>{children}</CoffeeContext.Provider>
}
