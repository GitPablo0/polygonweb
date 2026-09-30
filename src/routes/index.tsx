import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WspButton'      

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-mist">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  )
}
