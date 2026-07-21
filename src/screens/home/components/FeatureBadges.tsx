import { useTranslation } from 'react-i18next'
import { Bed, Gem, ShieldCheck, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const FEATURES: { key: string; Icon: LucideIcon }[] = [
  { key: 'warranty', Icon: ShieldCheck },
  { key: 'materials', Icon: Gem },
  { key: 'package', Icon: Bed },
  { key: 'guidance', Icon: User },
]

export function FeatureBadges() {
  const { t } = useTranslation()

  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 sm:-mt-16">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {FEATURES.map(({ key, Icon }) => (
          <div
            key={key}
            className="card-luxury flex flex-col items-center gap-3 rounded-2xl p-4 text-center sm:p-5"
          >
            <span className="ring-gold text-gold-solid flex size-12 items-center justify-center rounded-full">
              <Icon className="size-6" />
            </span>
            <div>
              <div className="font-semibold">{t(`features.${key}.title`)}</div>
              <div className="text-muted-foreground mt-1 text-xs leading-relaxed">
                {t(`features.${key}.description`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
