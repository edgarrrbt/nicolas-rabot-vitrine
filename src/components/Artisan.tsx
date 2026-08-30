import { SectionTitle } from './ui/SectionTitle'
import { Reveal } from './ui/Reveal'
import { artisan, site } from '../data/content'

export function Artisan() {
  return (
    <section id="artisan" className="section-x py-20 sm:py-28">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-organic-lg shadow-natural-lg">
            <img
              src={artisan.portrait}
              alt={artisan.portraitAlt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 rounded-organic bg-forest px-6 py-4 text-cream shadow-natural sm:-right-5">
            <p className="font-serif text-lg font-semibold">{site.tagline}</p>
            <p className="text-sm text-cream/75">{site.region}</p>
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle
            eyebrow="L’artisan"
            title="Nicolas Rabot, du tronc à l’habitat"
            align="left"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-bark-muted">
            {artisan.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {artisan.stats.map((s) => (
              <div key={s.label} className="rounded-organic border border-sand bg-soft-cream p-4">
                <dt className="font-serif text-lg font-semibold text-forest">{s.value}</dt>
                <dd className="mt-1 text-sm text-bark-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
