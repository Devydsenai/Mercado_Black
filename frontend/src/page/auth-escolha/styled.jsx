/**
 * AuthEscolha - tela de escolha entre Clerk e login/cadastro proprio
 * Mesmo estilo das telas Login/Cadastro (vidro, bolas)
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

export function AuthOptionsGrid({ children, className = '', ...props }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function AuthOptionCard({ children, className = '', ...props }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-xl min-h-[200px] hover:bg-white/30 transition-colors ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}
