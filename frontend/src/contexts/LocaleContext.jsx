import { createContext, useContext, useState, useCallback } from 'react'

const LOCALE_KEY = 'mercado-black-locale'

const LocaleContext = createContext(null)

const translations = {
  pt: {
    login: 'Login',
    email: 'E-mail',
    password: 'Senha',
    enter: 'Entrar',
    entering: 'Entrando...',
    noAccount: 'Não tem conta?',
    signUp: 'Cadastre-se',
    register: 'Cadastro',
    name: 'Nome',
    phone: 'Telefone',
    registerButton: 'Cadastrar',
    registering: 'Cadastrando...',
    hasAccount: 'Já tem conta?',
    doLogin: 'Faça login',
    errorLogin: 'Erro ao fazer login',
    errorRegister: 'Erro ao cadastrar',
    successRegister: 'Cadastrado com sucesso! Faça login para continuar.',
    showPassword: 'Mostrar senha',
    hidePassword: 'Ocultar senha',
  },
  en: {
    login: 'Login',
    email: 'Email',
    password: 'Password',
    enter: 'Enter',
    entering: 'Signing in...',
    noAccount: "Don't have an account?",
    signUp: 'Sign up',
    register: 'Register',
    name: 'Name',
    phone: 'Phone',
    registerButton: 'Register',
    registering: 'Registering...',
    hasAccount: 'Already have an account?',
    doLogin: 'Sign in',
    errorLogin: 'Error signing in',
    errorRegister: 'Error registering',
    successRegister: 'Registered successfully! Sign in to continue.',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
  },
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      return localStorage.getItem(LOCALE_KEY) || 'pt'
    } catch {
      return 'pt'
    }
  })

  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem(LOCALE_KEY, newLocale)
    } catch {}
  }, [])

  const t = translations[locale] || translations.pt

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale deve ser usado dentro de LocaleProvider')
  return ctx
}
