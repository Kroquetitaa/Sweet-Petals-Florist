import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { CardFlowers } from './CardFlowers'
import { mockProduct } from './mock/Product'

vi.mock('@/assets/Icons/Icon_ArrowUpDiagonal', () => ({
  IconArrowUpDiagonalSVG: () => <svg data-testid="arrow-icon" />,
}))

const navigateMock = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => navigateMock,
  }
})

const getProductByIdMock = vi.fn()

vi.mock('../../api/products.api', () => ({
  getProductById: (id: string) => getProductByIdMock(id),
}))

describe('CardFlowers component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders product information', () => {
    renderWithProviders(<CardFlowers product={mockProduct} />)

    expect(screen.getByText('Rosa')).toBeInTheDocument()
    expect(screen.getByText('Rosa rubiginosa')).toBeInTheDocument()
    expect(screen.getByText('€12.5')).toBeInTheDocument()
    expect(screen.getByAltText('Rosa')).toBeInTheDocument()
  })

  it('renders the action icon', () => {
    renderWithProviders(<CardFlowers product={mockProduct} />)

    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument()
  })

  it('prefetches product detail on hover', () => {
    renderWithProviders(<CardFlowers product={mockProduct} />)

    const button = screen.getByRole('button', {
      name: 'card.viewDetail',
    })

    fireEvent.mouseEnter(button)

    expect(getProductByIdMock).toHaveBeenCalledWith('1')
  })

  it('navigates to product detail on click', () => {
    renderWithProviders(<CardFlowers product={mockProduct} />)

    const button = screen.getByRole('button', {
      name: 'card.viewDetail',
    })

    fireEvent.click(button)

    expect(navigateMock).toHaveBeenCalledWith(expect.stringContaining('1'))
  })
})
