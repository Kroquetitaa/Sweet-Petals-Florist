import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { STORAGE_KEYS } from '@/constants/LocalStorage'
import { Theme } from '../Theme'
import type { ThemeState } from './Theme.types'

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: Theme.LIGHT,

      setTheme: (theme) => set({ theme }),

      toggleTheme: () => {
        const current = get().theme
        set({
          theme: current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
        })
      },
    }),
    {
      name: STORAGE_KEYS.THEME_STORAGE,
    }
  )
)
