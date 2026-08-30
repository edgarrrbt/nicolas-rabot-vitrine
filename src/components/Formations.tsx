import { SectionTitle } from './ui/SectionTitle'
import { Reveal } from './ui/Reveal'
import { FormationCard } from './FormationCard'
import { formations } from '../data/content'

export function Formations() {
  return (
    <section id="formations" className="relative bg-forest py-20 sm:py-28">
      <div className="container-max section-x">
        <SectionTitle
          eyebrow="Les formations"
          title="Deux immersions pour habiter autrement"
          intro="Des stages en petit groupe, directement chez l’artisan, pour apprendre par la pratique dans un cadre forestier préservé."
          tone="light"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {formations.map((f, i) => (
            <Reveal key={f.id} as="div" delay={i * 100} className="h-full">
              <FormationCard formation={f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
