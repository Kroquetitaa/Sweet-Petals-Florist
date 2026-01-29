import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { STORAGE_KEYS } from '@/constants/LocalStorage'

export const Theme = {
  DARK: 'dark',
  LIGHT: 'light',
} as const

export type Theme = (typeof Theme)[keyof typeof Theme]

type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  togglTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: Theme.LIGHT,
      setTheme: (theme) => set({ theme }),
      togglTheme: () => {
        const newTheme = get().theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        set({ theme: newTheme })
      },
    }),
    {
      name: STORAGE_KEYS.THEME_STORAGE,
    }
  )
)
