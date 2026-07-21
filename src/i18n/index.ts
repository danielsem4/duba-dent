import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en } from './locales/en'
import { he } from './locales/he'

export const SUPPORTED_LANGUAGES = ['en', 'he'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]
export const RTL_LANGUAGES: SupportedLanguage[] = ['he']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, he },
    fallbackLng: 'he',
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: { escapeValue: false },
    returnObjects: true,
    detection: {
      // Hebrew-first brand: only honor an explicit saved choice, otherwise fall back to he.
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'app-language',
    },
  })

export default i18n
