import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { queryClient } from '@/lib/react-query'
import { Router } from '@/routes'
import { THEME, useThemeStore } from '@/store'
import { darkTheme, lightTheme } from '@/styles/Theme'
import '../i18n/config'

export const App = () => {
  const theme = useThemeStore((s) => s.theme)

  const currentTheme = theme === THEME.DARK ? darkTheme : lightTheme

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={currentTheme}>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
