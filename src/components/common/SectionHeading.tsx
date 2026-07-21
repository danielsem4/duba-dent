interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center gap-3 text-center sm:mb-12">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span className="bg-gold h-px w-16 opacity-70" />
      {subtitle && (
        <p className="text-muted-foreground text-base">{subtitle}</p>
      )}
    </div>
  )
}
