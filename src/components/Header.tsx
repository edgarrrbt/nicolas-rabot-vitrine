import { useEffect, useState } from 'react'
import { List, X, Phone, Leaf } from '@phosphor-icons/react'
import { nav, site } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-cream/95 shadow-natural backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-x flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className={`flex items-center gap-2 font-serif text-lg font-semibold ${
            scrolled || open ? 'text-forest' : 'text-cream'
          }`}
        >
          <Leaf weight="fill" className="text-terracotta" size={26} aria-hidden />
          <span>{site.name}</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-terracotta ${
                scrolled ? 'text-bark' : 'text-cream'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-natural transition-transform hover:-translate-y-0.5"
          >
            <Phone weight="fill" size={18} aria-hidden />
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            scrolled || open ? 'text-forest' : 'text-cream'
          }`}
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="border-t border-sand/60 bg-cream lg:hidden"
        >
          <ul className="container-max section-x flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-[44px] py-3 text-base font-medium text-bark hover:text-terracotta"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 font-semibold text-white"
              >
                <Phone weight="fill" size={18} aria-hidden />
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
