import { Code2, PenTool, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  tags: Array<string>
}

const SERVICES: Array<Service> = [
  {
    icon: Code2,
    title: 'Desarrollo Web Custom',
    description:
      'Arquitecturas a medida sobre React y Next.js, pensadas para escalar sin arrastrar deuda técnica.',
    tags: ['Next.js', 'React', 'APIs'],
  },
  {
    icon: PenTool,
    title: 'Diseño UI/UX',
    description:
      'Wireframes, prototipos y sistemas de diseño que convierten interacciones complejas en flujos simples.',
    tags: ['Figma', 'Prototipado', 'Sistemas'],
  },
  {
    icon: TrendingUp,
    title: 'Optimización y SEO',
    description:
      'Auditorías técnicas, Core Web Vitals y estructura semántica para posicionar cada proyecto en buscadores.',
    tags: ['Core Web Vitals', 'Analytics', 'Semántica'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-haze-500">
            Qué hacemos?
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
            Servicios contruídos alrededor de tu proyecto
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`glass-panel flex flex-col rounded-[1.75rem] p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                  index === 1 ? 'md:-translate-y-4' : ''
                }`}
              >
                <div className="neu-surface flex h-14 w-14 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6 text-ink-soft" strokeWidth={1.75} />
                </div>
                <h3 className="font-display mt-7 text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
