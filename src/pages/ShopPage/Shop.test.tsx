import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { Product } from '@/interfaces'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { Shop } from './Shop'
import { mockProducts } from './ShopDetail/__mock__/Product'

vi.mock('@/hooks/useDebouncedValue', () => ({
  useDebouncedValue: (value: string) => value,
}))

vi.mock('@/assets/Icons', () => ({
  IconSearchSVG: () => <svg data-testid="search-icon" />,
}))

const useProductsQueryMock = vi.fn()

vi.mock('@/features', async () => {
  const actual = await vi.importActual<typeof import('@/features')>('@/features')

  return {
    ...actual,
    useProductsQuery: () => useProductsQueryMock(),
    CardFlowers: ({ product }: { product: Product }) => (
      <div data-testid="card">{product.name}</div>
    ),
  }
})

describe('Shop component', () => {
  it('filters products by name when typing in search input', async () => {
    useProductsQueryMock.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    })

    renderWithProviders(<Shop />)

    const input = screen.getByRole('searchbox')
    const user = userEvent.setup()

    await user.type(input, 'rosa')

    expect(screen.getByText('Rosa')).toBeInTheDocument()
    expect(screen.queryByText('Tulipán')).not.toBeInTheDocument()
  })
})
