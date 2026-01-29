import { render } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { App } from './App'

type ThemeValue = 'light' | 'dark'

type ThemeState = {
  theme: ThemeValue
}

vi.mock('@/store', () => ({
  Theme: {
    LIGHT: 'light' as ThemeValue,
    DARK: 'dark' as ThemeValue,
  },
  useThemeStore: <T,>(selector: (state: ThemeState) => T): T =>
    selector({
      theme: 'light',
    }),
}))

vi.mock('@/routes', () => ({
  Router: {},
}))

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')

  return {
    ...actual,
    RouterProvider: (_props: { router: unknown }): ReactNode => (
      <div data-testid="router-provider" />
    ),
  }
})

describe('App', () => {
  it('renders without crashing and mounts RouterProvider', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('router-provider')).toBeInTheDocument()
  })
})
