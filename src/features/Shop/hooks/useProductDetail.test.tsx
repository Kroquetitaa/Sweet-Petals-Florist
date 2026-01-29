import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { Product } from '@/interfaces'
import { useProductDetail } from './useProductDetail'

const getProductByIdMock = vi.fn()

vi.mock('../api/products.api', () => ({
  getProductById: (id: string) => getProductByIdMock(id),
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

describe('useProductDetail', () => {
  it('does not run query when id is undefined', () => {
    renderHook(() => useProductDetail(undefined), {
      wrapper: createWrapper(),
    })

    expect(getProductByIdMock).not.toHaveBeenCalled()
  })

  it('fetches product detail when id is provided', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Rosa',
      binomialName: 'Rosa rubiginosa',
      price: 12.5,
      imgUrl: '/rosa.jpg',
      wateringsPerWeek: 2,
      fertilizerType: 'nitrogen',
      heightInCm: 45,
    }

    getProductByIdMock.mockResolvedValueOnce(mockProduct)

    const { result } = renderHook(() => useProductDetail('1'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(getProductByIdMock).toHaveBeenCalledWith('1')
    expect(result.current.data).toEqual(mockProduct)
  })
})
