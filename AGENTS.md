# AGENTS.md

Guidance for AI agents (and humans) working on this codebase.

## Project overview

PolygonWeb is a single-page marketing landing for a freelance web/product design studio. It is a fully static TanStack Start site — no backend, no database, no forms currently wired up. Every section lives on the `/` route.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (file-based routing via TanStack Router) |
| UI | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4, CSS-first `@theme` (no `tailwind.config.js`) |
| Icons | lucide-react only — do not add another icon set |
| Images | Portfolio previews served through Netlify Image CDN (`/.netlify/images?...`) |
| Deployment | Netlify (`netlify.toml`: `vite build` → `dist/client`) |

## Directory structure

```
src/
  components/    One component per landing section (Navbar, Hero, Services, Portfolio, Footer)
                 plus two shared primitives: Logo.tsx (isotype + wordmark) and
                 GradientBackdrop.tsx (blurred gradient blobs reused behind Hero/Footer)
  routes/
    __root.tsx   Document shell: HTML head, Google Fonts links, SEO meta
    index.tsx    Composes the section components in order
  styles.css     All design tokens (colors, fonts, shadows) + reusable utility classes
                 (.glass-panel, .neu-surface, .btn-pill*)
public/img/      Generated portfolio preview images (see below)
```

## Design system conventions

- Never hardcode a hex color in a component; add it to the `@theme` block in `src/styles.css` and reference it via the generated Tailwind utility (`bg-mist`, `text-ink`, etc.). The current palette is intentionally narrow (pastel blue + charcoal) — do not introduce new hues without being asked.
- Headings use `font-display` (Space Grotesk), body copy uses the default `font-sans` (Plus Jakarta Sans).
- Card/panel surfaces use the `.glass-panel` utility class (translucent + blur + soft shadow); raised icon tiles use `.neu-surface` (soft neumorphic shadow pair).
- CTAs use `.btn-pill-primary` (solid dark) or `.btn-pill-ghost` (translucent outline) — always paired with `.btn-pill` for the shared pill shape/transition.

## Portfolio images

The three images in `public/img/` were generated once via the Netlify AI Gateway (Gemini image model) to match the pastel-blue aesthetic and are referenced through the Image CDN helper `imageUrl()` in `Portfolio.tsx`. They are static assets — regenerating them requires a one-off script using `@google/genai` against `NETLIFY_AI_GATEWAY_KEY`/`NETLIFY_AI_GATEWAY_BASE_URL` (see the `netlify-ai-gateway` skill); the dependency is not kept in `package.json` since nothing at runtime needs it.

## Conventions

- Components are function components, no default exports, PascalCase filenames.
- Section components are self-contained (own their copy/data arrays inline) since there is no CMS or database — if content needs to become editable, that's a new milestone, not a refactor of existing components.
- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
