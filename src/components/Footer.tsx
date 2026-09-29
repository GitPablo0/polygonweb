import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { GradientBackdrop } from './GradientBackdrop'
import { Logo } from './Logo'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gitpablo', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/GitPablo0', icon: Github },
  { label: 'Instagram', href: 'https://instagram.com/git.pablo', icon: Instagram },
]

const FOOTER_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Portafolio', href: '#portfolio' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative overflow-hidden px-4 pb-10 pt-24 sm:px-6 lg:px-10">
      <GradientBackdrop className="opacity-70" />

      <div className="relative mx-auto max-w-6xl">
        <div className="glass-panel rounded-[2rem] px-8 py-14 text-center sm:px-16">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-haze-500">
            Hablemos
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
            Listo para empezar tu siguiente proyecto?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft">
            Cuéntanos qué estás construyendo y te respondemos en menos de 24 horas.
          </p>
          <a
            href="mailto:gitpabloo@gmail.com"
            className="btn-pill btn-pill-primary mx-auto mt-8 w-fit px-8 py-3.5 text-sm"
          >
            <Mail className="h-4 w-4" />
            gitpabloo@gmail.com
          </a>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 border-t border-cloud pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Logo />
            <p className="max-w-xs text-center text-sm text-ink-soft sm:text-left">
              Estudio freelance de desarrollo web y producto digital.
            </p>
          </div>

          <nav className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              )
            })}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-ink-soft/80">
          © {year} PolygonWeb. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
