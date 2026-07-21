import { Star } from 'lucide-react'

export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center justify-center gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="text-gold-solid size-4 fill-current" />
      ))}
    </div>
  )
}
