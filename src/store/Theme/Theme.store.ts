import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { STORAGE_KEYS } from '@/constants/LocalStorage.constants'
import type { Theme } from './Theme.types'

export const useThemeStore = create<{
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}>()(
  persist(
    (set, get) => ({
      theme: 'light',

      setTheme: (theme) => set({ theme }),

      toggleTheme: () => {
        const current = get().theme
        set({
          theme: current === 'light' ? 'dark' : 'light',
        })
      },
    }),
    {
      name: STORAGE_KEYS.THEME_STORAGE,
    }
  )
)
