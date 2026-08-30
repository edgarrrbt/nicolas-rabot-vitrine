import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-terracotta text-white shadow-natural hover:bg-terracotta-dark hover:-translate-y-0.5',
  outline:
    'border-2 border-cream/80 text-cream hover:bg-cream/10 hover:-translate-y-0.5',
  ghost: 'text-forest hover:bg-forest/5',
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
