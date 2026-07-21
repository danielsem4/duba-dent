import { useTranslation } from 'react-i18next'
import { MousePointerClick } from 'lucide-react'

import { GALLERY } from '@/common/constants/media'
import { SectionHeading } from '@/components/common/SectionHeading'
import { PlayButton } from '@/components/common/PlayButton'
import { useVideoLightbox } from '@/store/useVideoLightbox'

export function BeforeAfter() {
  const { t } = useTranslation()
  const openVideo = useVideoLightbox((s) => s.open)

  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-24">
      <SectionHeading title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
        {GALLERY.map((item, i) => (
          <button
            key={item.image}
            type="button"
            onClick={() => item.video && openVideo(item.video)}
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
            {/* play overlay */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-90 transition group-hover:bg-black/25">
              <PlayButton />
            </span>
          </button>
        ))}
      </div>

      <p className="text-muted-foreground mt-8 flex items-center justify-center gap-2 text-sm">
        <MousePointerClick className="size-4" />
        {t('gallery.watch')}
      </p>
    </section>
  )
}
