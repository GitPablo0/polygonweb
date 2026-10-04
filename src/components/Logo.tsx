interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/img/logo.webp"
      alt="Polygon Web"
      className={className}
    />
  )
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-[0.14em] text-ink">
          POLYGON WEB
        </span>
      )}
    </div>
  )
}
