import { useTranslation } from 'react-i18next'
import { Check, Sparkles } from 'lucide-react'

import { TEETH_COLOR_SRC } from '@/common/constants/media'

export function SmileDesign() {
  const { t } = useTranslation()
  const points = t('smileDesign.points', { returnObjects: true }) as string[]

  return (
    <section
      id="smile-design"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-24"
    >
      <div className="grid items-center gap-8 sm:gap-12 md:grid-cols-2">
        {/* image */}
        <div className="card-luxury glow-violet relative aspect-[4/3] overflow-hidden rounded-3xl">
          <img
            src={TEETH_COLOR_SRC}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {/* subtle gradient so the frame melts into the page */}
          <div className="from-background/40 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent" />
        </div>

        {/* copy */}
        <div className="flex flex-col items-start gap-6">
          <span className="ring-gold text-gold-solid inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide">
            <Sparkles className="size-4" />
            {t('smileDesign.titleHighlight')}
          </span>

          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
            {t('smileDesign.titlePrefix')}{' '}
            <span className="text-gold">{t('smileDesign.titleHighlight')}</span>{' '}
            {t('smileDesign.titleSuffix')}
          </h2>

          <span className="bg-gold h-px w-16 opacity-70" />

          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="ring-gold text-gold-solid flex size-7 shrink-0 items-center justify-center rounded-full">
                  <Check className="size-4" />
                </span>
                <span className="text-muted-foreground text-base sm:text-lg">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gold text-xl font-bold sm:text-2xl">
            {t('smileDesign.payoff')}
          </p>
        </div>
      </div>
    </section>
  )
}
