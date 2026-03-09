/**
 * Loading - design system Tailwind (sistema de carregamento)
 * Cores: bg-background | bg-lilac | bg-secondary | bg-card (index.css)
 */

import { Link } from 'react-router-dom'

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

/** Cards de destaque - carrossel horizontal acima dos banners */
export function LoadingCardsWrapper({ children, className = '', ...props }) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function LoadingCardsScroll({ children, className = '', ...props }) {
  return (
    <div
      className={`flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent -mx-4 px-4 sm:mx-0 sm:px-0 ${className}`.trim()}
      style={{ scrollbarWidth: 'thin' }}
      {...props}
    >
      {children}
    </div>
  )
}

export function LoadingFeatureCard({ title, description, buttonText, href = '#', icon, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`flex-shrink-0 w-[72px] sm:w-[80px] rounded-md border border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col p-1.5 ${className}`.trim()}
      {...props}
    >
      <h3 className="font-semibold text-foreground text-[9px] mb-0.5">{title}</h3>
      <div className="flex-1 flex items-center justify-center my-0.5 text-primary min-h-[22px]">
        {icon}
      </div>
      <p className="text-[8px] text-muted-foreground mb-0.5 line-clamp-2 leading-tight">{description}</p>
      <span className="text-[9px] font-medium text-primary hover:underline">{buttonText}</span>
    </a>
  )
}

/** Carrossel de banners - canto a canto, responsivo */
export function LoadingBannerWrapper({ children, className = '', ...props }) {
  return (
    <div
      className={`w-full max-w-[100vw] overflow-x-hidden pt-1 ${className}`.trim()}
      {...props}
    >
      <div className="w-[100vw] max-w-none relative left-1/2 -translate-x-1/2">
        {children}
      </div>
    </div>
  )
}

/** Banner: imagem 100% largura, altura proporcional - mostra inteira sem corte */
export function LoadingBannerSlide({ src, alt, className = '', ...props }) {
  return (
    <div className="w-full min-w-full min-h-[280px] flex items-center justify-center relative bg-muted/5">
      <img
        src={src}
        alt={alt}
        className={`block w-full h-auto max-h-[60vh] object-contain object-center ${className}`.trim()}
        {...props}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 md:h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"
        aria-hidden
      />
    </div>
  )
}

/** Container de seção de produtos (Oferta do dia, Mais vendidos, etc.) - estilo ML */
export function LoadingProductSection({ title, children, linkText, linkHref = '/produtos', className = '', ...props }) {
  return (
    <section
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ${className}`.trim()}
      {...props}
    >
      <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden group">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
            {linkText && (
              <Link to={linkHref} className="text-primary hover:underline text-sm font-medium flex-shrink-0">
                {linkText}
              </Link>
            )}
          </div>
        </div>
        <div className="relative overflow-hidden pb-4">{children}</div>
      </div>
    </section>
  )
}

/** Seção de nuvens abaixo do carrossel com degradê */
export function LoadingCloudsSection({ className = '', ...props }) {
  return (
    <div
      className={`relative w-full min-h-[120px] overflow-hidden pt-2 pb-12 bg-gradient-to-b from-transparent via-background/70 to-background ${className}`.trim()}
      {...props}
    >
      <svg className="absolute bottom-2 left-[5%] w-24 h-12 opacity-40 dark:opacity-25" viewBox="0 0 100 50" fill="currentColor">
        <ellipse cx="25" cy="35" rx="20" ry="8" className="text-muted-foreground" />
        <ellipse cx="45" cy="32" rx="18" ry="7" className="text-muted-foreground" />
        <ellipse cx="65" cy="35" rx="22" ry="9" className="text-muted-foreground" />
      </svg>
      <svg className="absolute bottom-6 right-[15%] w-20 h-10 opacity-35 dark:opacity-20" viewBox="0 0 100 50" fill="currentColor">
        <ellipse cx="30" cy="30" rx="25" ry="10" className="text-muted-foreground" />
        <ellipse cx="55" cy="28" rx="20" ry="8" className="text-muted-foreground" />
      </svg>
      <svg className="absolute bottom-4 left-[35%] w-16 h-8 opacity-30 dark:opacity-15" viewBox="0 0 100 50" fill="currentColor">
        <ellipse cx="35" cy="32" rx="22" ry="9" className="text-muted-foreground" />
        <ellipse cx="60" cy="30" rx="18" ry="7" className="text-muted-foreground" />
      </svg>
      <svg className="absolute bottom-3 right-[5%] w-20 h-10 opacity-35 dark:opacity-20" viewBox="0 0 100 50" fill="currentColor">
        <ellipse cx="28" cy="33" rx="20" ry="8" className="text-muted-foreground" />
        <ellipse cx="50" cy="30" rx="18" ry="7" className="text-muted-foreground" />
      </svg>
    </div>
  )
}

