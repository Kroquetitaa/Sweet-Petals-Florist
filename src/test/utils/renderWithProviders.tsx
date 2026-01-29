import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/Theme'

const queryClient = new QueryClient()

export const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </QueryClientProvider>
  )
