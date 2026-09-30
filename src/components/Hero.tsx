import { ArrowRight } from 'lucide-react'
import { GradientBackdrop } from './GradientBackdrop'
import { LogoMark } from './Logo'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <GradientBackdrop />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-10">
        <span className="glass-panel mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-green-soft" />
          Disponible para nuevos proyectos
        </span>

        <h1 className="font-display max-w-4xl text-balance text-[2.6rem] font-semibold uppercase leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Tu idea, Tu Negocio, Tu Web
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base text-ink-soft sm:text-lg">
          Desarrollamos tu web, a tu medida y a tu presupuesto.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="btn-pill btn-pill-primary px-8 py-3.5 text-sm sm:text-base"
          >
            Explorar Proyectos
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="btn-pill btn-pill-ghost px-8 py-3.5 text-sm sm:text-base"
          >
            Contactarnos
          </a>
        </div>

        <div className="relative mt-20 w-full max-w-3xl">
          <div className="glass-panel flex items-center justify-between gap-6 rounded-[2rem] px-6 py-6 sm:px-10 sm:py-8">
            <div className="flex -space-x-3">
              <LogoMark className="h-11 w-11 rounded-2xl bg-white/70 p-2 shadow-sm" />
              <div className="h-11 w-11 rounded-2xl bg-haze-100/70" />
              <div className="h-11 w-11 rounded-2xl bg-haze-300/70" />
            </div>
            <div className="hidden h-10 w-px bg-white/60 sm:block" />
            <div className="grid flex-1 grid-cols-3 gap-4 text-left sm:gap-6">
              <div>
                <p className="font-display text-md font-semibold text-ink sm:text-2xl">1:1</p>
                <p className="text-xs text-ink-soft sm:text-sm">Charla directa</p>
              </div>
              <div>
                <p className="font-display text-md font-semibold text-ink sm:text-2xl">100%</p>
                <p className="text-xs text-ink-soft sm:text-sm">Código a medida</p>
              </div>
              <div>
                <p className="font-display text-md font-semibold text-ink sm:text-2xl">24/7</p>
                <p className="text-xs text-ink-soft sm:text-sm">Soporte disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
