import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom'
import type { SVGProps } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ROUTES } from '@/routes/Routes.types'
import { renderWithTheme } from '@/test/utils/renderWithTheme'
import { Header } from './Header'

vi.mock('@/assets/Icons', () => ({
  IconLogoSVG: (props: SVGProps<SVGSVGElement>) => <svg data-testid="logo-icon" {...props} />,
}))

describe('Header component', () => {
  it('renders the logo icon', () => {
    renderWithTheme(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByTestId('logo-icon')).toBeInTheDocument()
  })

  it('links to the shop route', () => {
    renderWithTheme(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: /go to shop/i })
    expect(link).toHaveAttribute('href', ROUTES.SHOP)
  })
})
