/**
 * Static media served from `public/`. Filenames contain spaces, so paths are
 * URL-encoded here once and consumed as-is by <img>/<video> src.
 */

export const LOGO_SRC = '/photo/dubadentlogotrans.png'

export const HERO_BG_SRC = '/photo/dubai_background.png'

const rawBeforeAfter = [
  'before after 1.jpeg',
  'before after 2.jpeg',
  'before after 3.jpeg',
  'before after 4.jpeg',
  'before after 5.jpeg',
  'before after 6.jpeg',
]

const rawVideos = [
  'WhatsApp Video 2026-07-21 at 12.31.46.mp4',
  'WhatsApp Video 2026-07-21 at 12.31.48.mp4',
  'WhatsApp Video 2026-07-21 at 12.31.50.mp4',
  'WhatsApp Video 2026-07-21 at 12.31.53.mp4',
  'WhatsApp Video 2026-07-21 at 12.31.54.mp4',
  'WhatsApp Video 2026-07-21 at 12.31.56.mp4',
  'WhatsApp Video 2026-07-21 at 12.32.06.mp4',
  'WhatsApp Video 2026-07-21 at 12.32.09.mp4',
  'WhatsApp Video 2026-07-21 at 12.32.11.mp4',
  'WhatsApp Video 2026-07-21 at 12.32.13 (1).mp4',
  'WhatsApp Video 2026-07-21 at 12.32.13.mp4',
  'WhatsApp Video 2026-07-21 at 12.32.14.mp4',
  'WhatsApp Video 2026-07-21 at 12.32.15.mp4',
  'WhatsApp Video 2026-07-21 at 12.32.19.mp4',
]

export const BEFORE_AFTER_IMAGES = rawBeforeAfter.map(
  (name) => `/photo/${encodeURIComponent(name)}`,
)

export const VIDEOS = rawVideos.map(
  (name) => `/video/${encodeURIComponent(name)}`,
)

export interface GalleryItem {
  image: string
}

/** Before/after cards — images only, no video playback. */
export const GALLERY: GalleryItem[] = BEFORE_AFTER_IMAGES.map((image) => ({ image }))

/** Video testimonials carousel — every clip. */
export const TESTIMONIAL_VIDEOS = VIDEOS
