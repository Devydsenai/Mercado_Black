import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './authContext.js'
import { useLocale } from './LocaleContext.jsx'
import { api } from '@/services/api.js'

const TOKEN_KEY = 'mercado-black-token'
const USER_KEY = 'mercado-black-user'

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const { t } = useLocale()
  const [user, setUser] = useState(() => {
    try {
      const u = localStorage.getItem(USER_KEY)
      return u ? JSON.parse(u) : null
    } catch {
      return null
    }
  })
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))

  function saveAuth(data) {
    setToken(data.token)
    setUser(data.usuario)
    localStorage.setItem(TOKEN_KEY, data.token)
    localStorage.setItem(USER_KEY, JSON.stringify(data.usuario))
  }

  function logout() {
    setToken(null)
    setUser(null)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  async function login(email, senha) {
    const data = await api.login(email, senha)
    saveAuth(data)
    navigate('/home')
  }

  async function cadastro(nome, email, senha, telefone) {
    await api.cadastro(nome, email, senha, telefone)
    navigate('/entrar', { state: { sucesso: t.successRegister } })
  }

  return (
    <AuthContext.Provider value={{ user, token, login, cadastro, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
