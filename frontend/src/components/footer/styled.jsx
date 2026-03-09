/**
 * Footer - design system Tailwind
 */
export function FooterContainer({ children, className = '', ...props }) {
  return (
    <footer
      className={`w-full bg-card border-t border-border mt-auto ${className}`.trim()}
      {...props}
    >
      {children}
    </footer>
  )
}

export function FooterInner({ children, className = '', ...props }) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function FooterGrid({ children, className = '', ...props }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function FooterBottom({ children, className = '', ...props }) {
  return (
    <div
      className={`border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}
