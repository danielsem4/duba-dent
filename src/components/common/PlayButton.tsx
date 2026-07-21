import { Play } from 'lucide-react'

import { cn } from '@/lib/utils'

/** Circular violet play badge used over videos/before-after cards. */
export function PlayButton({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'bg-primary/90 ring-primary/40 flex size-14 items-center justify-center rounded-full text-white shadow-lg ring-4 backdrop-blur transition-transform duration-300 group-hover:scale-110',
        className,
      )}
    >
      <Play className="size-6 translate-x-0.5 fill-current" />
    </span>
  )
}
