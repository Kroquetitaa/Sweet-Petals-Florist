import { create } from 'zustand'
import type { Product } from '@/interfaces'

interface ProductsState {
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
}

export const useProductsStore = create<ProductsState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}))
