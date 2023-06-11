import { CoffeeCatalog, CoffeeCatalogProps } from './CoffeeCatalog'
import {
  CofeeListFilter,
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListMiddle,
} from './styles'

import { coffees } from '../../fixtures/coffees.ts'
import { useEffect, useState } from 'react'

export function CoffeeList() {
  const [coffeesFiltered, setCoffeeFiltered] = useState<CoffeeCatalogProps[]>(
    [],
  )
  const [tagsFilters, setTagsFilters] = useState<String[]>([])
  console.log(tagsFilters)

  useEffect(() => {
    if (tagsFilters.length === 0) return setCoffeeFiltered(coffees)

    tagsFilters.map((tag) => {
      return setCoffeeFiltered((state) => {
        return state.filter((coffee) => coffee.tags.includes(tag.toLowerCase()))
      })
    })
  }, [tagsFilters])

  function handleAddFilterCoffee(tagName: string) {
    const tagExists = tagsFilters.includes(tagName)
    if (!tagExists) {
      return setTagsFilters([...tagsFilters, tagName])
    }

    return setTagsFilters(tagsFilters.filter((tag) => tag !== tagName))
  }
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>

        <div>
          <CofeeListFilter
            onClick={() => handleAddFilterCoffee('TRADICIONAL')}
            $variant={
              !tagsFilters.includes('TRADICIONAL') ? 'primary' : 'secondary'
            }
          >
            TRADICIONAL
          </CofeeListFilter>
          <CofeeListFilter
            onClick={() => handleAddFilterCoffee('ESPECIAL')}
            $variant={
              !tagsFilters.includes('ESPECIAL') ? 'primary' : 'secondary'
            }
          >
            ESPECIAL
          </CofeeListFilter>
          <CofeeListFilter
            onClick={() => handleAddFilterCoffee('COM LEITE')}
            $variant={
              !tagsFilters.includes('COM LEITE') ? 'primary' : 'secondary'
            }
          >
            COM LEITE
          </CofeeListFilter>
          <CofeeListFilter
            onClick={() => handleAddFilterCoffee('ALCOÓLICO')}
            $variant={
              !tagsFilters.includes('ALCOÓLICO') ? 'primary' : 'secondary'
            }
          >
            ALCOÓLICO
          </CofeeListFilter>
          <CofeeListFilter
            onClick={() => handleAddFilterCoffee('GELADO')}
            $variant={!tagsFilters.includes('GELADO') ? 'primary' : 'secondary'}
          >
            GELADO
          </CofeeListFilter>
        </div>
      </CoffeeListHeader>

      <CoffeeListMiddle>
        {coffeesFiltered.map((coffee) => {
          return (
            <CoffeeCatalog
              id={coffee.id}
              description={coffee.description}
              name={coffee.name}
              tags={coffee.tags}
              path={coffee.path}
              key={coffee.id}
            />
          )
        })}
      </CoffeeListMiddle>
    </CoffeeListContainer>
  )
}
