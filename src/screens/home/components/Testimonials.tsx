import { useTranslation } from 'react-i18next'
import { Quote } from 'lucide-react'

import { TESTIMONIAL_VIDEOS } from '@/common/constants/media'
import { SectionHeading } from '@/components/common/SectionHeading'
import { PlayButton } from '@/components/common/PlayButton'
import { StarRating } from '@/components/common/StarRating'
import { useVideoLightbox } from '@/store/useVideoLightbox'

interface Testimonial {
  quote: string
  name: string
}

export function Testimonials() {
  const { t } = useTranslation()
  const openVideo = useVideoLightbox((s) => s.open)
  const items = t('testimonials.items', { returnObjects: true }) as Testimonial[]

  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-24">
      <SectionHeading
        title={t('testimonials.title')}
        subtitle={t('testimonials.subtitle')}
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
        {items.map((item, i) => {
          const video = TESTIMONIAL_VIDEOS[i % TESTIMONIAL_VIDEOS.length]
          return (
            <div key={item.name} className="card-luxury flex flex-col overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => video && openVideo(video)}
                className="group relative aspect-video w-full overflow-hidden"
              >
                {/* seek to 1s so a real frame acts as the poster */}
                <video
                  src={`${video}#t=1`}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/40">
                  <PlayButton />
                </span>
              </button>
              <div className="flex flex-1 flex-col items-center gap-3 p-6 text-center">
                <StarRating />
                <Quote className="text-gold-solid size-5 opacity-70" />
                <p className="text-lg leading-relaxed font-medium text-balance">
                  “{item.quote}”
                </p>
                <span className="text-muted-foreground text-sm">— {item.name}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
