import { useTranslation } from 'react-i18next'

const STATS = [
  { key: 'years', value: '15+' },
  { key: 'patients', value: '8k+' },
  { key: 'rating', value: '4.9' },
]

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-muted/40 scroll-mt-20 border-y">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg text-pretty">
            {t('about.body')}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.key}
              className="bg-background rounded-xl border p-6 text-center"
            >
              <div className="text-primary text-3xl font-bold">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                {t(`about.stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
