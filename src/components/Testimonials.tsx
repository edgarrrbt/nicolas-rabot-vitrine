import { Quotes, Star } from '@phosphor-icons/react'
import { SectionTitle } from './ui/SectionTitle'
import { Reveal } from './ui/Reveal'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section id="avis" className="bg-soft-cream section-x py-20 sm:py-28">
      <div className="container-max">
        <SectionTitle
          eyebrow="Avis clients"
          title="Ce qu’en disent les stagiaires"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              as="article"
              delay={i * 100}
              className="flex h-full flex-col rounded-organic-lg border border-sand bg-white p-6 shadow-natural"
            >
              <Quotes weight="fill" size={32} className="text-terracotta/70" aria-hidden />
              <div className="mt-3 flex gap-0.5" aria-label="Note : 5 sur 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} weight="fill" size={16} className="text-clay" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-bark">
                « {t.quote} »
              </blockquote>
              <footer className="mt-5 border-t border-sand pt-4">
                <p className="font-serif font-semibold text-forest">{t.name}</p>
                <p className="text-sm text-bark-muted">{t.context}</p>
              </footer>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs italic text-bark-muted">
          Témoignages illustratifs — à remplacer par de vrais avis clients.
        </p>
      </div>
    </section>
  )
}
