/**
 * Static site configuration. Replace the placeholder phone / WhatsApp number
 * with the real one when available.
 */
export const SITE = {
  name: 'DubaDent',
  // international format, digits only — used to build the wa.me deep link
  whatsappNumber: '972509109002',
  phoneDisplay: '+972 50-910-9002',
  location: 'Dubai, UAE',
} as const

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}
