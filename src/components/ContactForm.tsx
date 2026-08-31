import { useState, type FormEvent, type FocusEvent, type ReactNode } from 'react'
import { PaperPlaneTilt, CheckCircle, Phone, MapPin } from '@phosphor-icons/react'
import { site, formations } from '../data/content'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form)
    const next: Errors = {}
    if (!String(data.get('name') ?? '').trim()) next.name = 'Merci d’indiquer votre nom.'
    const email = String(data.get('email') ?? '').trim()
    if (!email) next.email = 'Merci d’indiquer votre email.'
    else if (!emailRe.test(email)) next.email = 'Format d’email invalide.'
    if (!String(data.get('message') ?? '').trim()) next.message = 'Merci d’écrire votre message.'
    return next
  }

  function onBlur(e: FocusEvent<HTMLFormElement>) {
    const field = e.target.name as keyof Errors
    if (!field) return
    const found = validate(e.currentTarget)
    setErrors((prev) => ({ ...prev, [field]: found[field] }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-organic-lg border border-sage/40 bg-white p-8 text-center shadow-natural"
      >
        <CheckCircle weight="fill" size={48} className="mx-auto text-sage" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold text-forest">Message envoyé !</h3>
        <p className="mt-2 text-bark-muted">
          Merci pour votre intérêt. Nicolas vous répondra dans les meilleurs délais. Pour
          une demande urgente, appelez le{' '}
          <a href={site.phoneHref} className="font-semibold text-terracotta">
            {site.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} onBlur={onBlur} noValidate className="rounded-organic-lg border border-sand bg-white p-6 shadow-natural sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nom" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputCls(!!errors.email)}
          />
        </Field>
        <Field id="phone" label="Téléphone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls(false)}
          />
        </Field>
        <Field id="formation" label="Formation souhaitée">
          <select id="formation" name="formation" className={inputCls(false)} defaultValue="">
            <option value="">Indifférent / à définir</option>
            {formations.map((f) => (
              <option key={f.id} value={f.title}>
                {f.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Votre message" required error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={inputCls(!!errors.message)}
          />
        </Field>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 rounded-organic bg-red-50 p-3 text-sm text-red-700">
          Une erreur est survenue à l’envoi. Réessayez, ou appelez le {site.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-natural transition-all hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Spinner /> Envoi en cours…
          </>
        ) : (
          <>
            Envoyer ma demande
            <PaperPlaneTilt weight="fill" size={18} aria-hidden />
          </>
        )}
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-forest">
        {label}
        {required && <span className="text-terracotta" aria-hidden> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

function inputCls(hasError: boolean) {
  return `w-full rounded-organic border bg-cream px-4 py-3 text-base text-bark placeholder:text-bark-muted/60 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
    hasError ? 'border-red-400' : 'border-sand'
  }`
}

function Spinner() {
  return (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
      aria-hidden
    />
  )
}

export function ContactAside() {
  return (
    <div className="space-y-4">
      <AsideRow icon={<Phone weight="fill" size={20} />} title="Par téléphone">
        <a
          href={site.phoneHref}
          className="font-semibold text-cream underline decoration-terracotta underline-offset-4 hover:text-terracotta"
        >
          {site.phone}
        </a>{' '}
        · {site.phoneHours}
      </AsideRow>
      <AsideRow icon={<MapPin weight="fill" size={20} />} title="Sur place">
        {site.address}
      </AsideRow>
    </div>
  )
}

function AsideRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex gap-4 rounded-organic border border-forest-700/40 bg-forest-700/40 p-5">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta text-white" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="font-serif text-base font-semibold text-cream">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-cream/80">{children}</p>
      </div>
    </div>
  )
}
