/**
 * Static media served from `public/`. Filenames contain spaces, so paths are
 * URL-encoded here once and consumed as-is by <img>/<video> src.
 */

export const LOGO_SRC = '/photo/dubadentlogotrans.png'

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
]

export const BEFORE_AFTER_IMAGES = rawBeforeAfter.map(
  (name) => `/photo/${encodeURIComponent(name)}`,
)

export const VIDEOS = rawVideos.map(
  (name) => `/video/${encodeURIComponent(name)}`,
)

export interface GalleryItem {
  image: string
  /** optional video shown in the lightbox when the card is played */
  video?: string
}

/** Before/after cards, each paired with a testimonial-style clip. */
export const GALLERY: GalleryItem[] = BEFORE_AFTER_IMAGES.map((image, i) => ({
  image,
  video: VIDEOS[i % VIDEOS.length],
}))

/** Video testimonials (the last few clips, distinct from the gallery ones). */
export const TESTIMONIAL_VIDEOS = [VIDEOS[6], VIDEOS[7], VIDEOS[8]]
