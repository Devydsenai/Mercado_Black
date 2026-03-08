/**
 * ProductCard - design system Tailwind
 */
export function CardContainer({ children, className = '', ...props }) {
  return (
    <article
      className={`bg-card rounded-lg border border-border overflow-hidden shadow hover:shadow-md transition-shadow ${className}`.trim()}
      {...props}
    >
      {children}
    </article>
  )
}

export function CardImageWrapper({ children, className = '', ...props }) {
  return (
    <div className={`aspect-square bg-muted overflow-hidden ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`p-4 flex flex-col gap-2 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`font-semibold text-foreground line-clamp-2 ${className}`.trim()} {...props}>
      {children}
    </h3>
  )
}

export function CardPrice({ children, className = '', ...props }) {
  return (
    <p className={`text-primary font-bold text-lg ${className}`.trim()} {...props}>
      {children}
    </p>
  )
}
