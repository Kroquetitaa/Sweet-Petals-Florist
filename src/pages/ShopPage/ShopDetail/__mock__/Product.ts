import type { Product } from '@/interfaces'

export const mockProduct: Product = {
  id: '1',
  name: 'Rosa',
  binomialName: 'Rosa rubiginosa',
  price: 12.5,
  imgUrl: '/rosa.jpg',
  wateringsPerWeek: 2,
  fertilizerType: 'nitrogen',
  heightInCm: 45,
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Rosa',
    binomialName: 'Rosa rubiginosa',
    price: 12.5,
    imgUrl: '/rosa.jpg',
    wateringsPerWeek: 2,
    fertilizerType: 'nitrogen',
    heightInCm: 45,
  },
  {
    id: '2',
    name: 'Tulipán',
    binomialName: 'Tulipa gesneriana',
    price: 9.9,
    imgUrl: '/tulipan.jpg',
    wateringsPerWeek: 1,
    fertilizerType: 'phosphorus',
    heightInCm: 30,
  },
]
