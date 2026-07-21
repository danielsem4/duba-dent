import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useVideoLightbox } from '@/store/useVideoLightbox'

/** Mounted once at the app root; plays whichever clip a card opened. */
export function VideoLightbox() {
  const src = useVideoLightbox((s) => s.src)
  const close = useVideoLightbox((s) => s.close)

  return (
    <Dialog open={!!src} onOpenChange={(o) => !o && close()}>
      <DialogContent className="card-luxury overflow-hidden sm:max-w-sm">
        <DialogTitle className="sr-only">Video</DialogTitle>
        {src && (
          <video
            key={src}
            src={src}
            controls
            autoPlay
            playsInline
            className="h-auto max-h-[80vh] w-full rounded-xl"
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
