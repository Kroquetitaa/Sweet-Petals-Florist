import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual<typeof import('react-i18next')>('react-i18next')

  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        changeLanguage: async () => {},
      },
    }),
  }
})
