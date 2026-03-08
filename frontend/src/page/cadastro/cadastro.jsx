import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageWrapper } from '@/components/styled.jsx'
import { CardContainer } from '@/components/cards/styled.jsx'
import { InputBase } from '@/components/input/styled.jsx'
import { ButtonPrimary } from '@/components/button/styled.jsx'
import { BallsBg, FormArea, CadastroInputRow } from './styled'
import { useAuth } from '@/contexts/useAuth.js'
import { IconUser, IconMail, IconLock, IconPhone, IconEye, IconEyeOff } from '@/components/icons/Icons.jsx'

const inputGlassClass = '!border-0 !bg-transparent !rounded-none !ring-0 !ring-offset-0 h-full flex-1 px-3'

function Cadastro() {
  const { cadastro } = useAuth()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [showSenha, setShowSenha] = useState(false)
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    setLoading(true)
    try {
      await cadastro(nome, email, senha, telefone)
    } catch (err) {
      setErro(err.message || 'Erro ao cadastrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper className="overflow-hidden">
      <BallsBg />
      <CardContainer className="relative z-10 w-full max-w-md !rounded-2xl !border-white/30 !bg-white/20 backdrop-blur-xl shadow-xl p-8">
        <h1 className="text-xl font-bold text-foreground mb-6">Cadastro</h1>
        <FormArea onSubmit={handleSubmit}>
          {erro && (
            <p className="text-sm text-destructive w-full text-center">{erro}</p>
          )}
          <CadastroInputRow icon={<IconUser />}>
            <InputBase
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={inputGlassClass}
              required
            />
          </CadastroInputRow>
          <CadastroInputRow icon={<IconMail />}>
            <InputBase
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputGlassClass}
              required
            />
          </CadastroInputRow>
          <CadastroInputRow
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
          </CadastroInputRow>
          <CadastroInputRow icon={<IconPhone />}>
            <InputBase
              type="tel"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className={inputGlassClass}
              required
            />
          </CadastroInputRow>
          <ButtonPrimary
            type="submit"
            className="w-full max-w-[280px] h-14 rounded-full mt-2"
            disabled={loading}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </ButtonPrimary>
          <p className="text-sm text-muted-foreground">
            Já tem conta?{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Faça login
            </Link>
          </p>
        </FormArea>
      </CardContainer>
    </PageWrapper>
  )
}

export default Cadastro
