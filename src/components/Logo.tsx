interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="polygonFace1" x1="24" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CAD5DF" />
          <stop offset="1" stopColor="#9AAFC2" />
        </linearGradient>
        <linearGradient id="polygonFace2" x1="4" y1="24" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8FA7B8" />
          <stop offset="1" stopColor="#7D9AB3" />
        </linearGradient>
        <linearGradient id="polygonFace3" x1="24" y1="24" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9AAFC2" />
          <stop offset="1" stopColor="#1C2733" />
        </linearGradient>
      </defs>
      <path d="M24 4L44 16V24L24 24V4Z" fill="url(#polygonFace1)" />
      <path d="M24 24L24 44L6 34L4 24H24Z" fill="url(#polygonFace2)" />
      <path d="M24 24H44L42 34L24 44V24Z" fill="url(#polygonFace3)" />
      <path d="M4 24L24 4V24H4Z" fill="#D8E0E7" />
    </svg>
  )
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-[0.14em] text-ink">
          POLYGONWEB
        </span>
      )}
    </div>
  )
}
