/**
 * Cadastrar - container split (Cadastro custom + Clerk SignUp)
 */

export function AuthSplitContainer({ children, className = '', ...props }) {
  return (
    <div
      className={`relative min-h-screen flex flex-col md:flex-row w-full ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function AuthSplitLeft({ children, className = '', ...props }) {
  return (
    <div
      className={`flex-1 min-h-[50vh] md:min-h-screen flex items-center justify-center relative bg-lilac overflow-hidden p-6 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function AuthSplitRight({ children, className = '', ...props }) {
  return (
    <div
      className={`flex-1 min-h-[50vh] md:min-h-screen flex items-center justify-center bg-lilac p-6 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}
