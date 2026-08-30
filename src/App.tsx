import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Artisan } from './components/Artisan'
import { Formations } from './components/Formations'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { HoursMap } from './components/HoursMap'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#formations"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-terracotta focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu
      </a>
      <Header />
      <main>
        <Hero />
        <Artisan />
        <Formations />
        <Gallery />
        <Testimonials />
        <HoursMap />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
