interface Project {
  image: string
  title: string
  category: string
  description: string
}

const PROJECTS: Array<Project> = [
  {
    image: '/img/portfolio-1.png',
    title: 'Marea Studio',
    category: 'E-commerce · Next.js',
    description: 'Tienda headless para una marca de indumentaria costera con checkout en menos de 12 segundos.',
  },
  {
    image: '/img/portfolio-2.png',
    title: 'Nimbus Ledger',
    category: 'App móvil · Fintech',
    description: 'Panel de finanzas personales con seguimiento de gastos en tiempo real y alertas inteligentes.',
  },
  {
    image: '/img/portfolio-3.png',
    title: 'Lucent Cloud',
    category: 'SaaS · Landing',
    description: 'Landing de producto B2B con foco en conversión y una arquitectura de contenidos modular.',
  },
]

function imageUrl(src: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp`
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-haze-500">
              Selected work
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
              Portfolio
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            Una muestra de productos digitales diseñados y construidos de punta a punta junto a nuestros clientes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group glass-panel overflow-hidden rounded-[1.75rem] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imageUrl(project.image, 800)}
                  srcSet={`${imageUrl(project.image, 480)} 480w, ${imageUrl(project.image, 800)} 800w`}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  alt={`Vista previa del proyecto ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-haze-500">
                  {project.category}
                </p>
                <h3 className="font-display mt-2 text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
