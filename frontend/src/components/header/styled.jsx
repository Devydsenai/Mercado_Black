/**
 * Header - estilo Mercado Livre (duas linhas)
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
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

/** Linha superior: logo + endereço | busca | promoção/usuário */
export function HeaderTop({ children, className = '', ...props }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-stretch lg:items-center gap-4 py-3 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

/** Logo + endereço (esquerda) */
export function HeaderLogoArea({ children, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-0.5 flex-shrink-0 min-w-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function HeaderLogo({ children, className = '', ...props }) {
  return (
    <div
      className={`flex items-center gap-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function HeaderLogoText({ children, className = '', ...props }) {
  return (
    <span
      className={`text-xl font-bold text-foreground dark:text-foreground ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
}

export function HeaderAddress({ children, className = '', ...props }) {
  return (
    <span
      className={`text-xs text-muted-foreground flex items-center gap-1 ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
}

/** Barra de busca central (estilo ML) - ícone à direita */
export function HeaderSearch({ className = '', disabled, icon, iconClickable, ...props }) {
  return (
    <div className="flex-1 min-w-0 max-w-2xl relative">
      <input
        type="search"
        placeholder={disabled ? 'Pesquisar (faça login)' : 'Buscar produtos, marcas e muito mais...'}
        disabled={disabled}
        className={`w-full h-10 rounded-sm border-0 bg-white dark:bg-neutral-800 shadow-sm pl-3 pr-10 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60 ${className}`.trim()}
        aria-label="Pesquisar"
        {...props}
      />
      {icon && (
        <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 ${iconClickable ? '' : 'pointer-events-none'}`}>
          {icon}
        </span>
      )}
    </div>
  )
}

/** Área direita: promo ou usuário */
export function HeaderRight({ children, className = '', ...props }) {
  return (
    <div className={`flex items-center gap-3 flex-shrink-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

/** Bandeja promo (opcional) */
export function HeaderPromo({ children, className = '', ...props }) {
  return (
    <div
      className={`px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs font-medium whitespace-nowrap ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

/** Linha inferior: categorias + conta/entre/carrinho */
export function HeaderNav({ children, className = '', ...props }) {
  return (
    <nav
      className={`flex flex-wrap items-center justify-between gap-4 py-2 text-sm border-t border-border ${className}`.trim()}
      {...props}
    >
      {children}
    </nav>
  )
}

export function HeaderNavLinks({ children, className = '', ...props }) {
  return (
    <div className={`flex items-center gap-4 flex-wrap ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function HeaderUserLinks({ children, className = '', ...props }) {
  return (
    <div className={`flex items-center gap-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
