import { useTranslation } from 'react-i18next'

import { usePageTitle } from '@/hooks/common/usePageTitle'
import { Hero } from '@/screens/home/components/Hero'
import { Services } from '@/screens/home/components/Services'
import { About } from '@/screens/home/components/About'
import { Contact } from '@/screens/home/components/Contact'

export function Home() {
  const { t } = useTranslation()
  usePageTitle(t('nav.brand'))

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  )
}
