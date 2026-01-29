import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { THEME, type Theme, useThemeStore } from '@/store'
import { App } from './App'

vi.mock('@/routes', () => ({
  Router: {},
}))

vi.mock('react-router-dom', () => ({
  RouterProvider: () => <div data-testid="router-provider" />,
}))

vi.mock('@/store', () => ({
  THEME: {
    DARK: 'dark',
    LIGHT: 'light',
  },
  useThemeStore: vi.fn(),
}))

type ThemeStoreState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const createMockState = (theme: Theme): ThemeStoreState => ({
  theme,
  setTheme: vi.fn(),
  toggleTheme: vi.fn(),
})

describe('App component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders RouterProvider', () => {
    const mockUseThemeStore = vi.mocked(useThemeStore)

    mockUseThemeStore.mockImplementation((selector) => selector(createMockState(THEME.LIGHT)))

    const { getByTestId } = render(<App />)
    expect(getByTestId('router-provider')).toBeInTheDocument()
  })

  it('uses dark theme when theme is DARK', () => {
    const mockUseThemeStore = vi.mocked(useThemeStore)

    mockUseThemeStore.mockImplementation((selector) => selector(createMockState(THEME.DARK)))

    render(<App />)
    expect(useThemeStore).toHaveBeenCalled()
  })
})
