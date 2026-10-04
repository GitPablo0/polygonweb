import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

// 1. Componentes estáticos (se descargan en el primer pantallazo)
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WspButton'

// 2. Componentes diferidos con Lazy Loading (Code Splitting)
const Services = lazy(() =>
  import('@/components/Services').then((m) => ({ default: m.Services })),
)

const Portfolio = lazy(() =>
  import('@/components/Portfolio').then((m) => ({ default: m.Portfolio })),
)

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-mist">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <Portfolio />
        </Suspense>
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  )
}