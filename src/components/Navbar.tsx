import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass-panel px-4 py-2.5 sm:px-6">
        <a href="#home" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-pill btn-pill-primary px-6 py-2.5 text-sm">
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl glass-panel p-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-white/60 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-pill btn-pill-primary mt-2 px-6 py-2.5 text-center text-sm"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
