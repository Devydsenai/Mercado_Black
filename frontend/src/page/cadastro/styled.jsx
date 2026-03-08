/**
 * Cadastro - design system Tailwind
 * Usa: PageWrapper, CardContainer, InputBase, ButtonPrimary de @/components
 * Container vidro, bolas roxas no fundo (igual Login)
 */

export function BallsBg({ className = '', ...props }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`.trim()} {...props}>
      <span className="absolute w-64 h-64 rounded-full bg-primary/20 -top-32 -left-32 blur-2xl" />
      <span className="absolute w-96 h-96 rounded-full bg-primary/25 top-1/2 -right-48 blur-3xl" />
      <span className="absolute w-72 h-72 rounded-full bg-primary/15 -bottom-24 left-1/4 blur-2xl" />
      <span className="absolute w-40 h-40 rounded-full bg-primary/30 top-1/4 right-1/3 blur-xl" />
      <span className="absolute w-32 h-32 rounded-full bg-primary/20 bottom-1/3 left-1/2 blur-xl" />
    </div>
  )
}

export function FormArea({ children, className = '', ...props }) {
  return (
    <form
      className={`flex flex-col items-center gap-5 w-full max-w-[450px] ${className}`.trim()}
      {...props}
    >
      {children}
    </form>
  )
}

export function CadastroInputRow({ icon, action, children, className = '', ...props }) {
  return (
    <div
      className={`flex items-center gap-3 w-full h-14 min-h-14 rounded-full border border-white/50 bg-white/30 backdrop-blur-sm overflow-hidden px-4 sm:h-[65px] sm:min-h-[65px] sm:rounded-[32px] ${className}`.trim()}
      {...props}
    >
      {icon && <span className="flex-shrink-0 opacity-70">{icon}</span>}
      {children}
      {action && <span className="flex-shrink-0">{action}</span>}
    </div>
  )
}

