import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PageWrapper } from '@/components/styled.jsx'
import { CardContainer } from '@/components/cards/styled.jsx'
import { InputBase } from '@/components/input/styled.jsx'
import { ButtonPrimary } from '@/components/button/styled.jsx'
import { BallsBg, FormArea, LoginInputRow } from './styled'
import { useAuth } from '@/contexts/useAuth.js'
import { IconMail, IconLock, IconEye, IconEyeOff } from '@/components/icons/Icons.jsx'

const inputGlassClass = '!border-0 !bg-transparent !rounded-none !ring-0 !ring-offset-0 h-full flex-1 px-3'

function Login() {
  const { login } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [showSenha, setShowSenha] = useState(false)
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location.state?.sucesso) {
      setSucesso(location.state.sucesso)
      window.history.replaceState({}, '', location.pathname)
    }
  }, [location])

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    setLoading(true)
    try {
      await login(email, senha)
    } catch (err) {
      setErro(err.message || 'Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper className="overflow-hidden">
      <BallsBg />
      <CardContainer className="relative z-10 w-full max-w-md !rounded-2xl !border-white/30 !bg-white/20 backdrop-blur-xl shadow-xl p-8">
        <h1 className="text-xl font-bold text-foreground mb-6">Login</h1>
        <FormArea onSubmit={handleSubmit}>
          {sucesso && (
            <p className="text-sm text-primary font-medium w-full text-center">{sucesso}</p>
          )}
          {erro && (
            <p className="text-sm text-destructive w-full text-center">{erro}</p>
          )}
          <LoginInputRow icon={<IconMail />}>
            <InputBase
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputGlassClass}
              required
            />
          </LoginInputRow>
          <LoginInputRow
            icon={<IconLock />}
            action={
              <button
                type="button"
                onClick={() => setShowSenha((s) => !s)}
                className="p-1 hover:opacity-80 transition-opacity"
                aria-label={showSenha ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showSenha ? <IconEyeOff /> : <IconEye />}
              </button>
            }
          >
            <InputBase
              type={showSenha ? 'text' : 'password'}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={inputGlassClass}
              required
            />
          </LoginInputRow>
          <ButtonPrimary
            type="submit"
            className="w-full max-w-[280px] h-14 rounded-full mt-2"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </ButtonPrimary>
          <p className="text-sm text-muted-foreground">
            Não tem conta?{' '}
            <Link to="/cadastrar" className="text-primary hover:underline font-medium">
              Cadastre-se
            </Link>
          </p>
        </FormArea>
      </CardContainer>
    </PageWrapper>
  )
}

export default Login
