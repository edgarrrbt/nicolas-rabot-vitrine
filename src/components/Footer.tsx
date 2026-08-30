import { Leaf, Phone, MapPin } from '@phosphor-icons/react'
import { site, nav } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-forest-deep section-x pb-10 pt-14 text-cream">
      <div className="container-max grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-serif text-xl font-semibold">
            <Leaf weight="fill" size={26} className="text-terracotta" aria-hidden />
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.tagline}. Formations d’immersion à l’habitat écologique, autonome et
            insolite, en forêt de chênes près de Revel.
          </p>
        </div>

        <nav aria-label="Navigation pied de page">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cream/60">
            Navigation
          </p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-cream/80 hover:text-terracotta">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cream/60">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex items-center gap-2">
              <Phone weight="fill" size={16} className="text-terracotta" aria-hidden />
              <a href={site.phoneHref} className="hover:text-terracotta">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin weight="fill" size={16} className="mt-0.5 text-terracotta" aria-hidden />
              <span>
                {site.location}
                <br />
                {site.region}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-max mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name}. Tous droits réservés.
      </div>
    </footer>
  )
}
