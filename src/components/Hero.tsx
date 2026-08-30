import { MapPin, ArrowDown } from '@phosphor-icons/react'
import { Button } from './ui/Button'
import { site } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative grain min-h-dvh overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Nicolas Rabot travaillant le bois de sa forêt de chênes"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest/55 to-forest-deep/90"
        aria-hidden
      />

      <div className="container-max section-x relative flex min-h-dvh flex-col justify-center pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cream backdrop-blur">
            <MapPin weight="fill" size={16} className="text-terracotta" aria-hidden />
            {site.location}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Apprenez à construire un habitat écologique&nbsp;et autonome
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            Des formations d’immersion chez un artisan ébéniste et forestier, en
            forêt de chênes près du Lac de Saint-Ferréol. Du tronc au toit, avec
            des matériaux naturels et locaux.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#formations" variant="primary">
              Découvrir les formations
            </Button>
            <Button href="#contact" variant="outline">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#artisan"
        aria-label="Faire défiler vers la suite"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cream/70 transition-colors hover:text-cream sm:block"
      >
        <ArrowDown size={28} className="animate-bounce" aria-hidden />
      </a>
    </section>
  )
}
