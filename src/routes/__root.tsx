import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

const siteName = 'Polygon Web | Desarrollo Web & Soluciones Digitales'
const siteDescription =
  'Estudio de desarrollo web y móvil en Argentina. Diseñamos landing pages de alta conversión, aplicaciones web y plataformas digitales a medida para empresas y emprendedores.'
const siteUrl = 'https://polygonweb.com.ar'
const siteImage = `${siteUrl}/og-image.png`

// Esquema JSON-LD para SEO Local y Servicios Profesionales
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Polygon Web',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: siteImage,
  description: siteDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'José C. Paz',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-34.5153',
    longitude: '-58.7681',
  },
  priceRange: '$$',
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'keywords',
        content:
          'desarrollo web, landing page, aplicaciones web, React, soluciones digitales, argentina, polygon web',
      },
      // Open Graph (WhatsApp, Facebook, LinkedIn)
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteUrl,
      },
      {
        property: 'og:image',
        content: siteImage,
      },
      {
        property: 'og:locale',
        content: 'es_AR',
      },
      // Twitter Cards
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: siteName,
      },
      {
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        name: 'twitter:image',
        content: siteImage,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: siteUrl,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}