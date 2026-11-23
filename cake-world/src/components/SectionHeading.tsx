interface Props {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-8 max-w-xl">
      <h2 className="text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </div>
  )
}
