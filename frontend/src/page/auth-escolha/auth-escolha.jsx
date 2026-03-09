import { Link } from 'react-router-dom'
import { SignInButton, SignUpButton } from '@clerk/react'
import { PageWrapper } from '@/components/styled.jsx'
import { ButtonPrimary } from '@/components/button/styled.jsx'
import { BallsBg, AuthOptionsGrid, AuthOptionCard } from './styled'

function AuthEscolha() {
  return (
    <PageWrapper className="overflow-hidden">
      <BallsBg />
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-foreground mb-8">Entre ou cadastre-se</h1>

        <AuthOptionsGrid>
          <AuthOptionCard>
            <h2 className="text-lg font-semibold text-foreground">Com Clerk</h2>
            <p className="text-sm text-muted-foreground text-center mb-2">
              Use Google, e-mail ou outras redes
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Entrar
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  type="button"
                  className="px-6 py-3 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary/10 transition-colors"
                >
                  Cadastrar
                </button>
              </SignUpButton>
            </div>
          </AuthOptionCard>

          <AuthOptionCard>
            <h2 className="text-lg font-semibold text-foreground">Na nossa plataforma</h2>
            <p className="text-sm text-muted-foreground text-center mb-2">
              Use seu e-mail e senha
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/login">
                <ButtonPrimary className="px-6 py-3 rounded-full">
                  Entrar
                </ButtonPrimary>
              </Link>
              <Link to="/cadastro">
                <button
                  type="button"
                  className="px-6 py-3 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary/10 transition-colors"
                >
                  Cadastrar
                </button>
              </Link>
            </div>
          </AuthOptionCard>
        </AuthOptionsGrid>
      </div>
    </PageWrapper>
  )
}

export default AuthEscolha
