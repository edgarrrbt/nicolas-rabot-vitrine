import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'dark',
}: Props) {
  const isCenter = align === 'center'
  const titleColor = tone === 'light' ? 'text-cream' : 'text-forest'
  const introColor = tone === 'light' ? 'text-cream/80' : 'text-bark-muted'
  return (
    <div className={`${isCenter ? 'mx-auto text-center' : 'text-left'} max-w-2xl`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl leading-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${introColor}`}>{intro}</p>
      )}
    </div>
  )
}
