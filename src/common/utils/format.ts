/** Small shared formatting helpers. Grow this file as the app needs. */

export function formatDate(
  value: string | number | Date,
  locale = 'en',
): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(value))
}
