import { Clock, Tag, UsersThree, Check, ArrowRight, Info } from '@phosphor-icons/react'
import { Button } from './ui/Button'
import type { Formation } from '../data/content'

export function FormationCard({ formation }: { formation: Formation }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-organic-lg border border-sand bg-white shadow-natural">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={formation.image}
          alt={formation.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-forest/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream backdrop-blur">
          {formation.eyebrow}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-forest">{formation.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-bark-muted">{formation.intro}</p>

        <ul className="mt-5 flex flex-wrap gap-2 text-sm">
          <li className="inline-flex items-center gap-1.5 rounded-full bg-soft-cream px-3 py-1.5 text-bark">
            <Clock weight="fill" size={16} className="text-sage" aria-hidden />
            {formation.duration}
          </li>
          <li className="inline-flex items-center gap-1.5 rounded-full bg-soft-cream px-3 py-1.5 text-bark">
            <Tag weight="fill" size={16} className="text-sage" aria-hidden />
            {formation.price}
          </li>
          <li className="inline-flex items-center gap-1.5 rounded-full bg-soft-cream px-3 py-1.5 text-bark">
            <UsersThree weight="fill" size={16} className="text-sage" aria-hidden />
            {formation.group}
          </li>
        </ul>

        <div className="mt-6 space-y-4">
          {formation.program.map((phase) => (
            <div key={phase.day}>
              <p className="font-serif text-base font-semibold text-forest">{phase.day}</p>
              <ul className="mt-1.5 space-y-1">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-bark-muted">
                    <Check weight="bold" size={16} className="mt-0.5 shrink-0 text-terracotta" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul className="mt-6 space-y-2 border-t border-sand pt-5">
          {formation.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm font-medium text-forest">
              <Check weight="bold" size={16} className="mt-0.5 shrink-0 text-sage" aria-hidden />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {formation.note && (
          <p className="mt-4 flex items-start gap-2 rounded-organic bg-soft-cream p-3 text-xs text-bark-muted">
            <Info weight="fill" size={16} className="mt-0.5 shrink-0 text-clay" aria-hidden />
            {formation.note}
          </p>
        )}

        <div className="mt-auto pt-6">
          <Button href="#contact" variant="primary" className="w-full sm:w-auto">
            Demander cette formation
            <ArrowRight weight="bold" size={18} aria-hidden />
          </Button>
        </div>
      </div>
    </article>
  )
}
