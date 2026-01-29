import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { STORAGE_KEYS } from '@/constants/LocalStorage.constants'

import en from './locales/en.json'
import es from './locales/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE) || 'es'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })
  .catch((error) => console.error('i18n initialization failed', error))

export default i18n
