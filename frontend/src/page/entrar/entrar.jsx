import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SignIn } from '@clerk/react'
import { CardContainer } from '@/components/cards/styled.jsx'
import { InputBase } from '@/components/input/styled.jsx'
import { ButtonPrimary } from '@/components/button/styled.jsx'
import { BallsBg, FormArea, LoginInputRow } from '@/page/login/styled'
import { AuthSplitContainer, AuthSplitLeft, AuthSplitRight } from './styled'
import { useAuth } from '@/contexts/useAuth.js'
import { useLocale } from '@/contexts/LocaleContext.jsx'
import { IconMail, IconLock, IconEye, IconEyeOff } from '@/components/icons/Icons.jsx'

const inputGlassClass = '!border-0 !bg-transparent !rounded-none !ring-0 !ring-offset-0 h-full flex-1 px-3'

function Entrar() {
  const { login } = useAuth()
  const { t, locale, setLocale } = useLocale()
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
    if (location.state?.message) {
      setSucesso(location.state.message)
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
      setErro(err.message || t.errorLogin)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthSplitContainer>
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          type="button"
          onClick={() => setLocale('pt')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${locale === 'pt' ? 'bg-primary text-primary-foreground' : 'bg-white/30 text-foreground hover:bg-white/50'}`}
        >
          PT
        </button>
        <button
          type="button"
          onClick={() => setLocale('en')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${locale === 'en' ? 'bg-primary text-primary-foreground' : 'bg-white/30 text-foreground hover:bg-white/50'}`}
        >
          EN
        </button>
      </div>
      <AuthSplitLeft>
        <BallsBg />
        <CardContainer className="relative z-10 w-full max-w-[420px] min-h-[520px] !rounded-2xl !border-white/30 !bg-white/20 backdrop-blur-xl shadow-xl p-8">
          <h1 className="text-xl font-bold text-foreground mb-6">{t.login}</h1>
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
                placeholder={t.email}
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
                  aria-label={showSenha ? t.hidePassword : t.showPassword}
                >
                  {showSenha ? <IconEyeOff /> : <IconEye />}
                </button>
              }
            >
              <InputBase
                type={showSenha ? 'text' : 'password'}
                placeholder={t.password}
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
              {loading ? t.entering : t.enter}
            </ButtonPrimary>
            <p className="text-sm text-muted-foreground">
              {t.noAccount}{' '}
              <Link to="/cadastrar" className="text-primary hover:underline font-medium">
                {t.signUp}
              </Link>
            </p>
          </FormArea>
        </CardContainer>
      </AuthSplitLeft>

      <AuthSplitRight>
        <div className="w-full max-w-[420px] min-h-[520px] flex justify-center items-center">
          <SignIn signUpUrl="/cadastrar" />
        </div>
      </AuthSplitRight>
    </AuthSplitContainer>
  )
}

export default Entrar
