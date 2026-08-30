import { SectionTitle } from './ui/SectionTitle'
import { Reveal } from './ui/Reveal'
import { realisations } from '../data/content'

export function Gallery() {
  return (
    <section id="realisations" className="section-x py-20 sm:py-28">
      <div className="container-max">
        <SectionTitle
          eyebrow="Réalisations"
          title="Le bois, matière vivante"
          intro="Chaque essence issue de la forêt de chênes est valorisée à l’atelier en pièces uniques et durables."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {realisations.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 80}
              className={`overflow-hidden rounded-organic shadow-natural ${
                i === 0 ? 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${
                  i === 0 ? 'aspect-square lg:aspect-auto' : 'aspect-square'
                }`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
