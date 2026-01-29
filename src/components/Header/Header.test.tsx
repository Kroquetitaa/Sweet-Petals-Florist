import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom'
import type { SVGProps } from 'react'
import { renderWithTheme } from '@/test/utils/renderWithTheme'
import { Header } from './Header'

vi.mock('@/assets/Icons', () => ({
  IconLogoSVG: (props: SVGProps<SVGSVGElement>) => <svg data-testid="logo-icon" {...props} />,
}))

describe('Header component', () => {
  it('renders the logo icon', () => {
    renderWithTheme(<Header />)

    expect(screen.getByTestId('logo-icon')).toBeInTheDocument()
  })
})
