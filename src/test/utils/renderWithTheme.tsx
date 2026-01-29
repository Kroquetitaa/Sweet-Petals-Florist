import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/Theme'

export const renderWithTheme = (ui: ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>)
}
