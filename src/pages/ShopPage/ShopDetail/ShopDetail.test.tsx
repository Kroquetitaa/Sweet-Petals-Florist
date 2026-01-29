import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { mockProduct } from './__mock__/Product'
import { ShopDetail } from './ShopDetail'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useParams: () => ({ id: '1' }),
  }
})

const useProductDetailMock = vi.fn()

vi.mock('@/features/Shop/hooks/useProductDetail', () => ({
  useProductDetail: () => useProductDetailMock(),
}))

describe('ShopDetail component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state', () => {
    useProductDetailMock.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    })

    renderWithProviders(
      <MemoryRouter>
        <ShopDetail />
      </MemoryRouter>
    )

    expect(screen.getByText('common.loadingProduct')).toBeInTheDocument()
  })

  it('renders error state', () => {
    useProductDetailMock.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    })

    renderWithProviders(
      <MemoryRouter>
        <ShopDetail />
      </MemoryRouter>
    )

    expect(screen.getByText('common.errorProduct')).toBeInTheDocument()
  })

  it('renders product detail when data is loaded', () => {
    useProductDetailMock.mockReturnValue({
      data: mockProduct,
      isLoading: false,
      isError: false,
    })

    renderWithProviders(
      <MemoryRouter>
        <ShopDetail />
      </MemoryRouter>
    )

    expect(screen.getByText('shopDetail.breadcrumbHome')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Rosa' })).toBeInTheDocument()

    expect(screen.getByAltText('Rosa')).toBeInTheDocument()

    expect(screen.getByText('Rosa rubiginosa')).toBeInTheDocument()

    expect(screen.getByText('€12.5')).toBeInTheDocument()

    expect(screen.getByText('shopDetail.watering')).toBeInTheDocument()

    expect(screen.getByText('shopDetail.fertilizer')).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: 'shopDetail.addToCart',
      })
    ).toBeInTheDocument()
  })
})
