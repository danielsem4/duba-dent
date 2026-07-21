import { Languages } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useLanguageStore } from '@/store/useLanguageStore'

export function LanguageSwitcher() {
  const language = useLanguageStore((s) => s.language)
  const setLanguage = useLanguageStore((s) => s.setLanguage)

  const next = language === 'en' ? 'he' : 'en'
  const label = language === 'en' ? 'עברית' : 'EN'

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(next)}
      aria-label="Toggle language"
    >
      <Languages className="size-4" />
      {label}
    </Button>
  )
}
