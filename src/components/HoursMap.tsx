import type { ReactNode } from 'react'
import { MapPin, Clock, Phone, ArrowSquareOut } from '@phosphor-icons/react'
import { SectionTitle } from './ui/SectionTitle'
import { Reveal } from './ui/Reveal'
import { site, hours } from '../data/content'

export function HoursMap() {
  return (
    <section className="section-x py-20 sm:py-28">
      <div className="container-max">
        <SectionTitle
          eyebrow="Nous trouver"
          title="Horaires & accès"
          intro="En forêt de chênes, à environ un kilomètre du Lac de Saint-Ferréol."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <InfoRow icon={<MapPin weight="fill" size={22} />} title="Adresse">
              {site.address}
              <br />
              <span className="text-bark-muted">{site.location} · {site.region}</span>
            </InfoRow>
            <InfoRow icon={<Clock weight="fill" size={22} />} title="Horaires">
              {hours.weekdays}
              <br />
              <span className="text-bark-muted">{hours.note}</span>
            </InfoRow>
            <InfoRow icon={<Phone weight="fill" size={22} />} title="Téléphone">
              <a href={site.phoneHref} className="font-semibold text-forest hover:text-terracotta">
                {site.phone}
              </a>
              <br />
              <span className="text-bark-muted">Joignable de {site.phoneHours}</span>
            </InfoRow>

            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark"
            >
              Ouvrir dans Google Maps
              <ArrowSquareOut weight="bold" size={18} aria-hidden />
            </a>
          </Reveal>

          <Reveal className="overflow-hidden rounded-organic-lg border border-sand shadow-natural">
            <iframe
              title="Localisation — 455 chemin de Lasprades, 31250 Vaudreuille"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex gap-4 rounded-organic border border-sand bg-soft-cream p-5">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-cream" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="font-serif text-lg font-semibold text-forest">{title}</p>
        <p className="mt-1 text-base leading-relaxed text-bark">{children}</p>
      </div>
    </div>
  )
}
