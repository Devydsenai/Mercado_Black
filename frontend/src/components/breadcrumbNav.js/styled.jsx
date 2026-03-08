/**
 * BreadcrumbNav - design system Tailwind
 */
export function BreadcrumbNavContainer({ children, className = '', ...props }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function BreadcrumbItem({ children, className = '', ...props }) {
  return (
    <span className={`text-muted-foreground ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}

export function BreadcrumbSeparator({ children = '/', className = '', ...props }) {
  return (
    <span className={`text-muted-foreground mx-1 ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}
