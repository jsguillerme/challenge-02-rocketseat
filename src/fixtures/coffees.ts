import image0 from '../assets/coffee-images/Image.svg'
import image1 from '../assets/coffee-images/Image-1.svg'
import image2 from '../assets/coffee-images/Image-2.svg'
import image3 from '../assets/coffee-images/Image-3.svg'
import image4 from '../assets/coffee-images/Image-4.svg'
import image5 from '../assets/coffee-images/Image-5.svg'
import image6 from '../assets/coffee-images/Image-6.svg'
import image7 from '../assets/coffee-images/Image-7.svg'
import image8 from '../assets/coffee-images/Image-8.svg'
import image9 from '../assets/coffee-images/Image-9.svg'
import image10 from '../assets/coffee-images/Image-10.svg'
import image11 from '../assets/coffee-images/Image-11.svg'
import image12 from '../assets/coffee-images/Image-12.svg'
import image13 from '../assets/coffee-images/Image-13.svg'

import { CoffeeCatalogProps } from '../components/Coffee/CoffeeCatalog'

export const coffees: CoffeeCatalogProps[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    path: image1,
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
  },
  {
    id: '2',
    name: 'Expresso Americano',
    path: image2,
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    path: image3,
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    path: image4,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
  },
  {
    id: '5',
    name: 'Café com Leite',
    path: image5,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '6',
    name: 'Latte',
    path: image6,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '7',
    name: 'Capuccino',
    path: image7,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '8',
    name: 'Macchiato',
    path: image8,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '9',
    name: 'Mocaccino',
    path: image9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    path: image10,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['com leite', 'especial'],
  },
  {
    id: '11',
    name: 'Cubano',
    path: image11,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['gelado', 'alcoólico', 'especial'],
  },
  {
    id: '12',
    name: 'Havaiano',
    path: image12,
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
  },
  {
    id: '13',
    name: 'Árabe',
    path: image13,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
  },
  {
    id: '0',
    name: 'Irlandês',
    path: image0,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
  },
]
