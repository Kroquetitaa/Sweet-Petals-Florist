export const Theme = {
  DARK: 'dark',
  LIGHT: 'light',
} as const

export type Theme = (typeof Theme)[keyof typeof Theme]

export type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}
