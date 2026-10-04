interface Project {
  image: string
  title: string
  category: string
  description: string
  link: string
  alt:string
}

const PROJECTS: Array<Project> = [
  {
    image: '/img/portfolio-1.png',
    title: 'Cayo Perico',
    category: 'SaaS · Landing',
    description: 'Club de Cultura Urbana, estudio de tatuaje, barbería y cafetería en un mismo lugar.',
    link: 'https://cayoperico.com.ar',
    alt: 'Vista previa del proyecto Cayo Perico'
  },
  {
    image: '/img/portfolio-2.png',
    title: 'Malery',
    category: 'E-commerce · Tienda Nube',
    description: 'Lencería diseñada y confeccionada con amor, dedicación y atención a los detalles.',
    link: 'https://malery.com.ar',
    alt: 'Vista previa del proyecto Malery'
  },
  {
    image: '/img/portfolio-3.png',
    title: 'Familia Cristiana Eben Ezer',
    category: 'SaaS · Landing',
    description: 'Iglesia comprometida con la enseñanza de la Palabra de Dios y el crecimiento espiritual de las familias.',
    link: 'https://brown-badger-619821.hostingersite.com/',
    alt: 'Vista previa del proyecto Familia Cristiana Eben Ezer'
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-haze-500">
              Trabajo seleccionado
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
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-panel overflow-hidden rounded-[1.75rem] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
  src={project.image}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
