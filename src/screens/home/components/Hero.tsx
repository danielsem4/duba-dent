import { useTranslation } from 'react-i18next'
import { Dot } from 'lucide-react'

import { HERO_BG_SRC, LOGO_SRC } from '@/common/constants/media'
import { GoldCta } from '@/components/common/GoldCta'

export function Hero() {
  const { t } = useTranslation()
  const bullets = t('hero.subtitle', { returnObjects: true }) as string[]

  return (
    <section
      id="top"
      className="grain relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-24 text-center sm:pb-32"
    >
      {/* full-bleed Dubai photo behind content */}
      <img
        src={HERO_BG_SRC}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 h-full w-full object-cover object-center"
      />
      {/* darken slightly for text contrast + fade into page below */}
      <div className="pointer-events-none absolute inset-0 bg-background/25" />
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t to-transparent" />

      <div className="animate-in fade-in slide-in-from-bottom-4 relative z-10 flex flex-col items-center gap-6 duration-1000">
        <img
          src={LOGO_SRC}
          alt={t('nav.brand')}
          className="glow-violet size-28 rounded-full sm:size-32"
        />

        <p className="text-gold text-sm font-medium tracking-[0.2em] sm:text-base">
          {t('hero.tagline')}
        </p>

        <h1 className="max-w-4xl text-4xl leading-tight font-extrabold text-balance sm:text-6xl">
          {t('hero.titlePrefix')} <span className="text-gold">EMAX</span>{' '}
          {t('hero.titleSuffix')}
        </h1>

        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-1 text-base sm:text-lg">
          {bullets.map((b, i) => (
            <span key={b} className="inline-flex items-center">
              {i > 0 && <Dot className="text-primary size-5" />}
              {b}
            </span>
          ))}
        </div>

        <GoldCta label={t('hero.cta')} className="mt-2" />
      </div>
    </section>
  )
}
