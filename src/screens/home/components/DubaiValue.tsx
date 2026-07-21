import { useTranslation } from 'react-i18next'
import { BadgePercent, Palmtree, Receipt } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { SectionHeading } from '@/components/common/SectionHeading'

const CARDS: { key: string; Icon: LucideIcon }[] = [
  { key: 'noTax', Icon: BadgePercent },
  { key: 'noVat', Icon: Receipt },
  { key: 'vacation', Icon: Palmtree },
]

export function DubaiValue() {
  const { t } = useTranslation()

  return (
    <section
      id="dubai-value"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-24"
    >
      <SectionHeading title={t('dubaiValue.title')} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map(({ key, Icon }) => (
          <div
            key={key}
            className="card-luxury flex flex-col items-center gap-3 rounded-2xl p-5 text-center sm:p-6"
          >
            <span className="ring-gold text-gold-solid flex size-12 items-center justify-center rounded-full">
              <Icon className="size-6" />
            </span>
            <div className="font-semibold">{t(`dubaiValue.cards.${key}`)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
