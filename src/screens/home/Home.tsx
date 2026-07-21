import { useTranslation } from 'react-i18next'

import { usePageTitle } from '@/hooks/common/usePageTitle'
import { Hero } from '@/screens/home/components/Hero'
import { FeatureBadges } from '@/screens/home/components/FeatureBadges'
import { BeforeAfter } from '@/screens/home/components/BeforeAfter'
import { CtaBanner } from '@/screens/home/components/CtaBanner'
import { Testimonials } from '@/screens/home/components/Testimonials'

export function Home() {
  const { t } = useTranslation()
  usePageTitle(`${t('nav.brand')} · EMAX`)

  return (
    <>
      <Hero />
      <FeatureBadges />
      <BeforeAfter />
      <CtaBanner />
      <Testimonials />
    </>
  )
}
