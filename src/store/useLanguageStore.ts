import { create } from 'zustand'
import i18n, {
  RTL_LANGUAGES,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from '@/i18n'

interface LanguageState {
  language: SupportedLanguage
  setLanguage: (language: SupportedLanguage) => void
}

function applyLanguage(language: SupportedLanguage) {
  const dir = RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr'
  i18n.changeLanguage(language)
  document.documentElement.lang = language
  document.documentElement.dir = dir
}

function initialLanguage(): SupportedLanguage {
  const current = (i18n.resolvedLanguage ?? 'he') as SupportedLanguage
  return SUPPORTED_LANGUAGES.includes(current) ? current : 'he'
}

export const useLanguageStore = create<LanguageState>((set) => {
  const language = initialLanguage()
  applyLanguage(language)

  return {
    language,
    setLanguage: (language) => {
      applyLanguage(language)
      set({ language })
    },
  }
})
