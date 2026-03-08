/**
 * Header - design system Tailwind
 */
export function HeaderContainer({ children, className = '', ...props }) {
  return (
    <header
      className={`w-full bg-background border-b border-border shadow-sm sticky top-0 z-50 ${className}`.trim()}
      {...props}
    >
      {children}
    </header>
  )
}

export function HeaderInner({ children, className = '', ...props }) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function HeaderLogo({ children, className = '', ...props }) {
  return (
    <div className={`text-xl font-serif font-bold text-primary ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function HeaderNav({ children, className = '', ...props }) {
  return (
    <nav className={`flex items-center gap-6 ${className}`.trim()} {...props}>
      {children}
    </nav>
  )
}
