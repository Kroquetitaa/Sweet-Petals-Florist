import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Product } from '@/interfaces'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { Shop } from './Shop'
import { mockProducts } from './ShopDetail/__mock__/Product'

vi.mock('@/assets/Icons', () => ({
  IconSearchSVG: () => <svg data-testid="search-icon" />,
}))

const useProductsQueryMock = vi.fn()

vi.mock('@/features', async () => {
  const actual = await vi.importActual('@/features')
  return {
    ...actual,
    useProductsQuery: () => useProductsQueryMock(),
    CardFlowers: ({ product }: { product: Product }) => (
      <div data-testid="card">{product.name}</div>
    ),
  }
})

describe('Shop component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state', () => {
    useProductsQueryMock.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    })

    renderWithProviders(<Shop />)

    expect(screen.getByText('common.loadingProducts')).toBeInTheDocument()
  })

  it('renders error state', () => {
    useProductsQueryMock.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error('error'),
    })

    renderWithProviders(<Shop />)

    expect(screen.getByText('common.errorProducts')).toBeInTheDocument()
  })

  it('renders all products when search is empty', () => {
    useProductsQueryMock.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    })

    renderWithProviders(<Shop />)

    const cards = screen.getAllByTestId('card')
    expect(cards).toHaveLength(2)

    expect(screen.getByText('Rosa')).toBeInTheDocument()
    expect(screen.getByText('Tulipán')).toBeInTheDocument()
  })

  it('filters products by name when typing in search input', () => {
    useProductsQueryMock.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    })

    renderWithProviders(<Shop />)

    const input = screen.getByPlaceholderText('shop.searchPlaceholder')

    fireEvent.change(input, {
      target: { value: 'rosa' },
    })

    expect(screen.getByText('Rosa')).toBeInTheDocument()
    expect(screen.queryByText('Tulipán')).not.toBeInTheDocument()
  })
})
