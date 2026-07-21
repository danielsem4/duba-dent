import { useTranslation } from 'react-i18next'

import { whatsappLink } from '@/common/constants/site'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'

/**
 * Persistent WhatsApp CTA for mobile only (the navbar CTA is hidden below sm).
 * Pinned to the bottom-end corner so it flips sides under RTL (Hebrew), and
 * lifted above the iOS home indicator via the safe-area inset.
 */
export function FloatingWhatsApp() {
  const { t } = useTranslation()

  return (
    <a
      href={whatsappLink(t('cta.whatsappMessage'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('nav.cta')}
      className="bg-gold glow-violet fixed end-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex size-14 items-center justify-center rounded-full text-[#2a1a05] shadow-[0_10px_40px_-8px_rgba(230,198,111,0.8)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 sm:hidden"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-[#128c7e] text-white">
        <WhatsAppIcon className="size-5" />
      </span>
    </a>
  )
}
