import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { VideoLightbox } from '@/components/common/VideoLightbox'
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp'

export function PublicLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <VideoLightbox />
      <FloatingWhatsApp />
    </div>
  )
}
