# PolygonWeb

Landing page for PolygonWeb, a freelance web and product design studio. Ultra-minimalist visual style with soft pastel-blue mesh gradients, glassmorphism panels, and a geometric/futuristic type pairing.

## Tech stack

- **TanStack Start** (React 19 + TanStack Router) for routing and SSR
- **Vite 7** as the build tool
- **Tailwind CSS 4** (CSS-first `@theme` config) for styling
- **lucide-react** for all icons
- **Netlify Image CDN** to serve the portfolio preview images as optimized WebP
- Deploys on **Netlify** via `@netlify/vite-plugin-tanstack-start`

## Project structure

```
src/
  components/
    Logo.tsx             Polygon isotype (SVG) + wordmark
    GradientBackdrop.tsx Decorative blurred gradient blobs
    Navbar.tsx            Sticky glass navbar with mobile menu
    Hero.tsx              Hero section with headline, CTA, stats strip
    Services.tsx          3-card services grid
    Portfolio.tsx         Project grid using generated preview images
    Footer.tsx            Contact CTA, social links, copyright
  routes/
    __root.tsx            Document shell, fonts, SEO meta
    index.tsx             Assembles the landing page sections
  styles.css               Tailwind theme tokens (palette, fonts, shadows) + utility classes
public/img/                Generated portfolio preview images
```

## Running locally

```bash
npm install
npm run dev
```

Or with the Netlify CLI (recommended, emulates Image CDN and redirects locally):

```bash
netlify dev
```

## Design tokens

Colors, fonts, and shadows are defined once in `src/styles.css` under `@theme`:

- Backgrounds: `mist` (`#F3F5F8`), `mist-alt` (`#E9EDF1`)
- Cards: `cloud` (`#D8E0E7`)
- Accents: `haze-100/300/400/500` (`#CAD5DF`, `#9AAFC2`, `#8FA7B8`, `#7D9AB3`)
- Text: `ink` (dark charcoal-blue), `ink-soft` (muted body copy)
- Display font: Space Grotesk (headings) · Body font: Plus Jakarta Sans

## Deployment

The `netlify.toml` build command is `vite build`, publishing `dist/client`. No environment variables or database are required — this is a static marketing page.
