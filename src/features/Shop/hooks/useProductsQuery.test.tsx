import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { Product } from '@/interfaces'
import { useProductsQuery } from './useProductsQuery'

const fetchProductsMock = vi.fn()

vi.mock('@/features/Shop/api/products.api', () => ({
  fetchProducts: () => fetchProductsMock(),
}))

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('useProductsQuery', () => {
  it('fetches products list', async () => {
    const mockProducts: Product[] = [
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
    ]

    fetchProductsMock.mockResolvedValueOnce(mockProducts)

    const { result } = renderHook(() => useProductsQuery(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(fetchProductsMock).toHaveBeenCalled()
    expect(result.current.data).toEqual(mockProducts)
    expect(result.current.data?.length).toBe(1)
  })

  it('uses correct query key', async () => {
    fetchProductsMock.mockResolvedValueOnce([])

    const { result } = renderHook(() => useProductsQuery(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data).toEqual([])
  })
})
