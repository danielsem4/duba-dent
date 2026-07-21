import { useTranslation } from 'react-i18next'
import { CalendarCheck, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden">
      <div className="from-primary/10 via-background to-background absolute inset-0 bg-gradient-to-b" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center md:py-32">
        <span className="border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium">
          <Sparkles className="size-4" />
          {t('hero.badge')}
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-6xl">
          {t('hero.title')}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg text-pretty">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#contact">
              <CalendarCheck className="size-4" />
              {t('hero.primaryCta')}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#services">{t('hero.secondaryCta')}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
