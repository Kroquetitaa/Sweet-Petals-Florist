import { useQuery } from '@tanstack/react-query'
import { STORAGE_KEYS } from '@/constants/LocalStorage.constants'
import { getProductById } from '../api/products.api'

export const useProductDetail = (id?: string) => {
  return useQuery({
    queryKey: [STORAGE_KEYS.PRODUCTS_QUERY_KEY, id],
    enabled: Boolean(id),
    queryFn: () => {
      if (!id) {
        throw new Error('Product id is required')
      }
      return getProductById(id)
    },
  })
}
