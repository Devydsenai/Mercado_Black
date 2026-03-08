/**
 * Carousels - design system Tailwind
 */
export function CarouselContainer({ children, className = '', ...props }) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselTrack({ children, className = '', ...props }) {
  return (
    <div
      className={`flex transition-transform duration-500 ease-out ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselItem({ children, className = '', ...props }) {
  return (
    <div
      className={`min-w-full flex-shrink-0 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselPrev({ children, className = '', ...props }) {
  return (
    <button
      className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background transition-colors z-10 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export function CarouselNext({ children, className = '', ...props }) {
  return (
    <button
      className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background transition-colors z-10 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export function CarouselIndicators({ children, className = '', ...props }) {
  return (
    <div
      className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselIndicator({ active, className = '', ...props }) {
  return (
    <button
      className={`w-2 h-2 rounded-full transition-colors ${
        active ? 'bg-primary' : 'bg-muted-foreground/50 hover:bg-muted-foreground'
      } ${className}`.trim()}
      aria-current={active}
      {...props}
    />
  )
}
