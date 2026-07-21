import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'
import { whatsappLink } from '@/common/constants/site'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'

interface GoldCtaProps {
  label: string
  className?: string
  size?: 'default' | 'lg'
}

export function GoldCta({ label, className, size = 'lg' }: GoldCtaProps) {
  const { t } = useTranslation()

  return (
    <a
      href={whatsappLink(t('cta.whatsappMessage'))}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative inline-flex items-center justify-center gap-3 rounded-full font-semibold text-[#2a1a05] transition-all duration-300',
        'bg-gold shadow-[0_10px_40px_-10px_rgba(230,198,111,0.7)] hover:shadow-[0_14px_50px_-8px_rgba(230,198,111,0.9)] hover:-translate-y-0.5',
        size === 'lg'
          ? 'px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg'
          : 'px-6 py-3 text-base',
        className,
      )}
    >
      <span className="flex size-7 items-center justify-center rounded-full bg-[#128c7e] text-white">
        <WhatsAppIcon className="size-4" />
      </span>
      {label}
    </a>
  )
}
