/**
 * Button - design system Tailwind
 */
const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'

export function ButtonPrimary({ children, className = '', ...props }) {
  return (
    <button
      className={`${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonSecondary({ children, className = '', ...props }) {
  return (
    <button
      className={`${baseClasses} bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border px-4 py-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonOutline({ children, className = '', ...props }) {
  return (
    <button
      className={`${baseClasses} border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonGhost({ children, className = '', ...props }) {
  return (
    <button
      className={`${baseClasses} hover:bg-accent hover:text-accent-foreground px-4 py-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
