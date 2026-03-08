/**
 * Cards - design system Tailwind
 */
export function CardContainer({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-lg border border-border bg-card text-card-foreground shadow ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`font-semibold leading-none tracking-tight ${className}`.trim()} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`.trim()} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
