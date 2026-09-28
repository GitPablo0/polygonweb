export function GradientBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}
    >
      <div className="absolute -top-32 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-haze-300 opacity-50 blur-[110px]" />
      <div className="absolute top-1/3 right-[-15%] h-[30rem] w-[30rem] rounded-full bg-haze-100 opacity-60 blur-[120px]" />
      <div className="absolute bottom-[-15%] left-1/4 h-[22rem] w-[22rem] rounded-full bg-haze-500 opacity-40 blur-[100px]" />
    </div>
  )
}
