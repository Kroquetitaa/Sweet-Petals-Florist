import { useQuery } from '@tanstack/react-query'
import { STORAGE_KEYS } from '@/constants/LocalStorage.constants'
import { fetchProducts } from '@/features/Shop/api/products.api'
import type { Product } from '@/interfaces'

export const useProductsQuery = () =>
  useQuery<Product[], Error>({
    queryKey: [STORAGE_KEYS.PRODUCTS_QUERY_KEY],
    queryFn: fetchProducts,
  })
