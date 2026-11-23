import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CakeSlice, Menu, X } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { usePrefersReducedMotion } from '../hooks'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-butter text-ink' : 'text-muted hover:bg-sand hover:text-ink'
  }`
const plainLink = 'rounded-full px-4 py-2 text-left text-sm font-medium text-muted transition-colors hover:bg-sand hover:text-ink'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const goToContact = () => {
    setOpen(false)
    document.getElementById('contact')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
            <CakeSlice className="h-5 w-5" aria-hidden="true" />
          </span>
          {siteConfig.businessName}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/cakes" className={linkClass}>Categories</NavLink>
          <button type="button" onClick={goToContact} className={plainLink}>Contact</button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="flex flex-col gap-1 border-t border-gold/20 px-5 pb-4 pt-2 md:hidden">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/cakes" className={linkClass}>Categories</NavLink>
          <button type="button" onClick={goToContact} className={plainLink}>Contact</button>
        </nav>
      )}
    </header>
  )
}
