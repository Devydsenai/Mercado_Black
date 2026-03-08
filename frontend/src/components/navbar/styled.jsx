/**
 * Navbar - design system Tailwind
 */
export function NavbarContainer({ children, className = '', ...props }) {
  return (
    <nav
      className={`w-full flex items-center gap-4 p-4 ${className}`.trim()}
      {...props}
    >
      {children}
    </nav>
  )
}

export function NavbarList({ children, className = '', ...props }) {
  return (
    <ul className={`flex items-center gap-6 list-none m-0 p-0 ${className}`.trim()} {...props}>
      {children}
    </ul>
  )
}

export function NavbarItem({ children, className = '', ...props }) {
  return (
    <li className={`${className}`.trim()} {...props}>
      {children}
    </li>
  )
}

export function NavbarLink({ children, className = '', ...props }) {
  return (
    <a
      className={`text-foreground hover:text-primary transition-colors ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  )
}
