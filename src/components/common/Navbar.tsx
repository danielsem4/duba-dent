import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'
import { LOGO_SRC } from '@/common/constants/media'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { GoldCta } from '@/components/common/GoldCta'

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-background/80 border-b border-border backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={LOGO_SRC}
            alt={t('nav.brand')}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="hidden text-lg font-semibold tracking-wide sm:inline">
            {t('nav.brand')}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <GoldCta label={t('nav.cta')} size="default" className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  )
}
