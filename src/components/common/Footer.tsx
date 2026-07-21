import { useTranslation } from 'react-i18next'
import { Stethoscope } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm sm:flex-row">
        <div className="flex items-center gap-2 font-medium">
          <Stethoscope className="text-primary size-4" />
          <span>{t('nav.brand')}</span>
        </div>
        <p>{t('footer.tagline')}</p>
        <p>
          © 2026 {t('nav.brand')}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
