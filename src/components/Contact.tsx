import { SectionTitle } from './ui/SectionTitle'
import { Reveal } from './ui/Reveal'
import { ContactForm, ContactAside } from './ContactForm'

export function Contact() {
  return (
    <section id="contact" className="relative grain bg-forest-deep section-x py-20 sm:py-28">
      <div className="container-max">
        <SectionTitle
          eyebrow="Contact"
          title="Réservez votre immersion"
          intro="Une question sur les formations, les dates ou le financement ? Écrivez à Nicolas, la réponse est toujours personnelle."
          tone="light"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={100}>
            <ContactAside />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
