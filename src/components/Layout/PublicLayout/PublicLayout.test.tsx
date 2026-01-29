import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { PublicLayout } from './PublicLayout'

vi.mock('@/components/Header/Header', () => ({
  Header: () => <header data-testid="header" />,
}))

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as typeof import('react-router-dom')

  return {
    ...actual,
    Outlet: () => <div data-testid="outlet" />,
  }
})

describe('PublicLayout', () => {
  it('renders Header and Outlet', () => {
    renderWithProviders(<PublicLayout />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('outlet')).toBeInTheDocument()
  })
})
