import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { router } from '@/routes/Router'
import { Theme, useThemeStore } from '@/store/Theme'
import { darkTheme, lightTheme } from '@/styles/Theme'

export const App = () => {
  const theme = useThemeStore((s) => s.theme)
  const currentTheme = theme === Theme.DARK ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
