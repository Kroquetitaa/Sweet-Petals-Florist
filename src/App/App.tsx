import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from '@/routes'
import { Theme, useThemeStore } from '@/store'
import { darkTheme, lightTheme } from '@/styles/Theme'

export const App = () => {
  const theme = useThemeStore((s) => s.theme)
  const currentTheme = theme === Theme.DARK ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}
