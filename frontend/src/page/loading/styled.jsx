/**
 * Loading - design system Tailwind (sistema de carregamento)
 * Cores: bg-background | bg-lilac | bg-secondary | bg-card (index.css)
 */

export function LoadingContainer({ children, className = '', bgColor = 'bg-background', ...props }) {
  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center ${bgColor} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function LoadingIcon({ children, className = '', ...props }) {
  return (
    <div className={`mt-[50px] ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function LoadingSpinner({ className = '', ...props }) {
  return (
    <div
      className={`w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin ${className}`.trim()}
      role="status"
      aria-label="Carregando"
      {...props}
    />
  )
}

export function LoadingDots({ className = '', ...props }) {
  return (
    <div className={`flex gap-2 ${className}`.trim()} role="status" aria-label="Carregando" {...props}>
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
    </div>
  )
}

export function LoadingSkeleton({ className = '', ...props }) {
  return (
    <div
      className={`h-4 bg-muted rounded animate-pulse ${className}`.trim()}
      {...props}
    />
  )
}

export function LoadingText({ children = 'Carregando...', className = '', ...props }) {
  return (
    <p className={`text-muted-foreground text-sm mt-4 ${className}`.trim()} {...props}>
      {children}
    </p>
  )
}
