import { useTranslation } from 'react-i18next'

import { GALLERY } from '@/common/constants/media'
import { SectionHeading } from '@/components/common/SectionHeading'

export function BeforeAfter() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-24">
      <SectionHeading title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
        {GALLERY.map((item, i) => (
          <div
            key={item.image}
            className="group card-luxury relative aspect-[9/16] overflow-hidden rounded-2xl"
          >
            <img
              src={item.image}
              alt={`${t('gallery.before')} / ${t('gallery.after')} ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* top/bottom labels */}
            <span className="absolute top-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {t('gallery.before')}
            </span>
            <span className="bg-primary/80 absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {t('gallery.after')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
