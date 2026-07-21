import { useTranslation } from 'react-i18next'
import { Braces, HeartPulse, Smile, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const SERVICES: { key: string; Icon: LucideIcon }[] = [
  { key: 'general', Icon: HeartPulse },
  { key: 'cosmetic', Icon: Sparkles },
  { key: 'orthodontics', Icon: Braces },
  { key: 'implants', Icon: Smile },
]

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          {t('services.title')}
        </h2>
        <p className="text-muted-foreground mt-2">{t('services.subtitle')}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ key, Icon }) => (
          <Card key={key} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-2 flex size-11 items-center justify-center rounded-lg">
                <Icon className="size-5" />
              </div>
              <CardTitle>{t(`services.items.${key}.title`)}</CardTitle>
              <CardDescription>
                {t(`services.items.${key}.description`)}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
