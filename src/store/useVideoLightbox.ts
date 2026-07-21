import { create } from 'zustand'

interface VideoLightboxState {
  src: string | null
  open: (src: string) => void
  close: () => void
}

/** Single global video lightbox — any card can open a clip by src. */
export const useVideoLightbox = create<VideoLightboxState>((set) => ({
  src: null,
  open: (src) => set({ src }),
  close: () => set({ src: null }),
}))
