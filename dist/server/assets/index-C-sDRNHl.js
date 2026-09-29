import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { X, Menu, ArrowRight, Code2, PenTool, TrendingUp, Mail, Linkedin, Github, Instagram } from "lucide-react";
function LogoMark({ className }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "/img/logo.png",
      alt: "Polygon Web",
      className
    }
  );
}
function Logo({ className, showWordmark = true }) {
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-2.5 ${className ?? ""}`, children: [
    /* @__PURE__ */ jsx(LogoMark, { className: "h-8 w-8 shrink-0" }),
    showWordmark && /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold tracking-[0.14em] text-ink", children: "POLYGON WEB" })
  ] });
}
const NAV_LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#services" },
  { label: "Portafolio", href: "#portfolio" },
  { label: "Contacto", href: "#contact" }
];
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between rounded-full glass-panel px-4 py-2.5 sm:px-6", children: [
      /* @__PURE__ */ jsx("a", { href: "#home", className: "flex items-center", children: /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-8 md:flex", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          className: "text-sm font-medium text-ink-soft transition-colors hover:text-ink",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "btn-pill btn-pill-primary px-6 py-2.5 text-sm", children: "Empezar" }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setIsMenuOpen((open) => !open),
          className: "flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden",
          "aria-label": isMenuOpen ? "Close menu" : "Open menu",
          "aria-expanded": isMenuOpen,
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "mx-auto mt-2 max-w-6xl rounded-3xl glass-panel p-4 md:hidden", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-1", children: [
      NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          onClick: () => setIsMenuOpen(false),
          className: "rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-white/60 hover:text-ink",
          children: link.label
        },
        link.href
      )),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#contact",
          onClick: () => setIsMenuOpen(false),
          className: "btn-pill btn-pill-primary mt-2 px-6 py-2.5 text-center text-sm",
          children: "Get Started"
        }
      )
    ] }) })
  ] });
}
function GradientBackdrop({ className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": "true",
      className: `pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-haze-300 opacity-50 blur-[110px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-[-15%] h-[30rem] w-[30rem] rounded-full bg-haze-100 opacity-60 blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-15%] left-1/4 h-[22rem] w-[22rem] rounded-full bg-haze-500 opacity-40 blur-[100px]" })
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32", children: [
    /* @__PURE__ */ jsx(GradientBackdrop, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("span", { className: "glass-panel mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-haze-500" }),
        "Disponible para nuevos proyectos"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "font-display max-w-4xl text-balance text-[2.6rem] font-semibold uppercase leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl", children: "Tu idea, Tu Negocio, Tu Web" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-balance text-base text-ink-soft sm:text-lg", children: "Desarrollamos tu web, a tu medida y a tu presupuestp." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#portfolio",
            className: "btn-pill btn-pill-primary px-8 py-3.5 text-sm sm:text-base",
            children: [
              "Explorar Proyectos",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "btn-pill btn-pill-ghost px-8 py-3.5 text-sm sm:text-base",
            children: "Contactarnos"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-20 w-full max-w-3xl", children: /* @__PURE__ */ jsxs("div", { className: "glass-panel flex items-center justify-between gap-6 rounded-[2rem] px-6 py-6 sm:px-10 sm:py-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex -space-x-3", children: [
          /* @__PURE__ */ jsx(LogoMark, { className: "h-11 w-11 rounded-2xl bg-white/70 p-2 shadow-sm" }),
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-2xl bg-haze-100/70" }),
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-2xl bg-haze-300/70" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden h-10 w-px bg-white/60 sm:block" }),
        /* @__PURE__ */ jsxs("div", { className: "grid flex-1 grid-cols-3 gap-4 text-left sm:gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-semibold text-ink sm:text-2xl", children: "38" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-soft sm:text-sm", children: "Products shipped" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-semibold text-ink sm:text-2xl", children: "6.4y" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-soft sm:text-sm", children: "In business" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-semibold text-ink sm:text-2xl", children: "94%" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-soft sm:text-sm", children: "Repeat clients" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const SERVICES = [
  {
    icon: Code2,
    title: "Desarrollo Web Custom",
    description: "Arquitecturas a medida sobre React y Next.js, pensadas para escalar sin arrastrar deuda técnica.",
    tags: ["Next.js", "React", "APIs"]
  },
  {
    icon: PenTool,
    title: "Diseño UI/UX",
    description: "Wireframes, prototipos y sistemas de diseño que convierten interacciones complejas en flujos simples.",
    tags: ["Figma", "Prototipado", "Sistemas"]
  },
  {
    icon: TrendingUp,
    title: "Optimización y SEO",
    description: "Auditorías técnicas, Core Web Vitals y estructura semántica para posicionar cada proyecto en buscadores.",
    tags: ["Core Web Vitals", "Analytics", "Semántica"]
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "relative px-4 py-24 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-xs font-semibold uppercase tracking-[0.3em] text-haze-500", children: "Qué hacemos?" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display mt-4 text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl", children: "Servicios contruídos alrededor de tu proyecto" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: SERVICES.map((service, index) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `glass-panel flex flex-col rounded-[1.75rem] p-8 transition-transform duration-500 hover:-translate-y-1.5 ${index === 1 ? "md:-translate-y-4" : ""}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "neu-surface flex h-14 w-14 items-center justify-center rounded-2xl", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-ink-soft", strokeWidth: 1.75 }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display mt-7 text-xl font-semibold text-ink", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-ink-soft", children: service.description }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: service.tags.map((tag) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft",
                children: tag
              },
              tag
            )) })
          ]
        },
        service.title
      );
    }) })
  ] }) });
}
const PROJECTS = [
  {
    image: "/img/portfolio-1.png",
    title: "Cayo Perico",
    category: "E-commerce · Next.js",
    description: "Club de Cultura Urbana, estudio de tatuaje, barbería y cafetería en un mismo lugar.",
    link: "https://cayoperico.com.ar"
  },
  {
    image: "/img/portfolio-2.png",
    title: "Malery",
    category: "E-commerce · Fintech",
    description: "Lencería diseñada y confeccionada con amor, dedicación y atención a los detalles.",
    link: "https://malery.com.ar"
  },
  {
    image: "/img/portfolio-3.png",
    title: "Familia Cristiana Eben Ezer",
    category: "SaaS · Landing",
    description: "Iglesia comprometida con la enseñanza de la Palabra de Dios y el crecimiento espiritual de las familias.",
    link: "https://brown-badger-619821.hostingersite.com/"
  }
];
function Portfolio() {
  return /* @__PURE__ */ jsx("section", { id: "portfolio", className: "relative px-4 py-24 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xs font-semibold uppercase tracking-[0.3em] text-haze-500", children: "Trabajo seleccionado" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display mt-4 text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl", children: "Portfolio" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-sm text-sm text-ink-soft", children: "Una muestra de productos digitales diseñados y construidos de punta a punta junto a nuestros clientes." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: PROJECTS.map((project) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group glass-panel overflow-hidden rounded-[1.75rem] transition-transform duration-500 hover:-translate-y-1.5",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: project.image,
              alt: `Vista previa del proyecto ${project.title}`,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-haze-500", children: project.category }),
            /* @__PURE__ */ jsx("h3", { className: "font-display mt-2 text-lg font-semibold text-ink", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-ink-soft", children: project.description })
          ] })
        ]
      },
      project.title
    )) })
  ] }) });
}
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gitpablo", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/GitPablo0", icon: Github },
  { label: "Instagram", href: "https://instagram.com/git.pablo", icon: Instagram }
];
const FOOTER_LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#services" },
  { label: "Portafolio", href: "#portfolio" }
];
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { id: "contact", className: "relative overflow-hidden px-4 pb-10 pt-24 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsx(GradientBackdrop, { className: "opacity-70" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-panel rounded-[2rem] px-8 py-14 text-center sm:px-16", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xs font-semibold uppercase tracking-[0.3em] text-haze-500", children: "Hablemos" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display mx-auto mt-4 max-w-2xl text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl", children: "Listo para empezar tu siguiente proyecto?" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-md text-sm text-ink-soft", children: "Cuéntanos qué estás construyendo y te respondemos en menos de 24 horas." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:gitpabloo@gmail.com",
            className: "btn-pill btn-pill-primary mx-auto mt-8 w-fit px-8 py-3.5 text-sm",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
              "gitpabloo@gmail.com"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 flex flex-col items-center gap-8 border-t border-cloud pt-10 sm:flex-row sm:items-start sm:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 sm:items-start", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx("p", { className: "max-w-xs text-center text-sm text-ink-soft sm:text-left", children: "Estudio freelance de desarrollo web y producto digital." })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "flex gap-6", children: FOOTER_LINKS.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: "text-sm font-medium text-ink-soft transition-colors hover:text-ink",
            children: link.label
          },
          link.href
        )) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return /* @__PURE__ */ jsx(
            "a",
            {
              href: social.href,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": social.label,
              className: "glass-panel flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink",
              children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4", strokeWidth: 1.75 })
            },
            social.label
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-10 text-center text-xs text-ink-soft/80", children: [
        "© ",
        year,
        " PolygonWeb. Todos los derechos reservados."
      ] })
    ] })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-x-hidden bg-mist", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Portfolio, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as component
};
