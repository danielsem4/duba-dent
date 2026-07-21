import { useTranslation } from 'react-i18next'
import { MessageCircle } from 'lucide-react'

import { GoldCta } from '@/components/common/GoldCta'

export function CtaBanner() {
  const { t } = useTranslation()

  return (
    <section className="px-4 py-8">
      <div className="card-luxury glow-violet relative mx-auto flex max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-3xl px-5 py-10 text-center sm:px-6 sm:py-14">
        <div className="from-primary/20 pointer-events-none absolute inset-0 bg-linear-to-br to-transparent" />
        <span className="ring-gold text-gold-solid relative flex size-12 items-center justify-center rounded-full">
          <MessageCircle className="size-6" />
        </span>
        <h2 className="relative text-2xl font-extrabold sm:text-3xl">
          {t('cta.title')}
        </h2>
        <GoldCta label={t('cta.button')} className="relative" />
      </div>
    </section>
  )
}
