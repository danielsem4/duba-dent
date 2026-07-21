import { useTranslation } from 'react-i18next'
import { Clock, MapPin, Phone, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { LOGO_SRC } from '@/common/constants/media'
import { SITE } from '@/common/constants/site'

export function Footer() {
  const { t } = useTranslation()

  const info: { Icon: LucideIcon; label: string; value: string }[] = [
    { Icon: MapPin, label: t('footer.location'), value: t('footer.locationValue') },
    { Icon: Phone, label: t('footer.phone'), value: SITE.phoneDisplay },
    { Icon: Clock, label: t('footer.duration'), value: t('footer.durationValue') },
    { Icon: ShieldCheck, label: t('footer.warranty'), value: t('footer.warrantyValue') },
  ]

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {info.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="ring-gold text-gold flex size-11 shrink-0 items-center justify-center rounded-full">
                <Icon className="size-5" />
              </span>
              <div>
                <div className="text-muted-foreground text-xs">{label}</div>
                <div className="font-medium" dir="auto">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-8 text-center">
          <img src={LOGO_SRC} alt={t('nav.brand')} className="size-12 rounded-full" />
          <p className="text-muted-foreground text-sm">
            © 2026 {t('nav.brand')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
