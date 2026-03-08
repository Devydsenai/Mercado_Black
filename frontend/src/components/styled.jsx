/**
 * Componentes de layout usando Tailwind (design system centralizado em index.css)
 * Cores e tema definidos em :root --lilac e tailwind.config.js
 */

export function PageWrapper({ children, className = '', ...props }) {
  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center relative bg-lilac overflow-x-hidden p-6 box-border ${className}`.trim()}
      {...props}
    >
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

export { BreadcrumbNavContainer } from './breadcrumbNav.js/styled.jsx'
