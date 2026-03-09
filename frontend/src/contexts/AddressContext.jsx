import { createContext, useContext, useState, useCallback } from 'react'
import { buscarEnderecoPorCep } from '@/services/viacep'

const ADDRESS_KEY = 'mercado-black-endereco'

const AddressContext = createContext(null)

const initialState = { cep: '', rua: '', bairro: '', cidade: '', estado: '' }

export function AddressProvider({ children }) {
  const [address, setAddressState] = useState(() => {
    try {
      const saved = localStorage.getItem(ADDRESS_KEY)
      return saved ? JSON.parse(saved) : initialState
    } catch {
      return initialState
    }
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setAddress = useCallback((data) => {
    setAddressState((prev) => ({ ...prev, ...data }))
    setError('')
  }, [])

  const buscarPorCep = useCallback(async (cep) => {
    setLoading(true)
    setError('')
    try {
      const data = await buscarEnderecoPorCep(cep)
      setAddressState((prev) => ({
        ...prev,
        cep: data.cep,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      }))
      return data
    } catch (err) {
      setError(err.message || 'Erro ao buscar CEP')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const salvar = useCallback((isAuth) => {
    if (!isAuth) return
    try {
      localStorage.setItem(ADDRESS_KEY, JSON.stringify(address))
    } catch {}
  }, [address])

  const limpar = useCallback(() => {
    setAddressState(initialState)
    setError('')
    try {
      localStorage.removeItem(ADDRESS_KEY)
    } catch {}
  }, [])

  const enderecoFormatado = [address.cidade, address.estado]
    .filter(Boolean)
    .join(' - ') || address.cep || null

  return (
    <AddressContext.Provider
      value={{ address, setAddress, buscarPorCep, salvar, limpar, loading, error, enderecoFormatado }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export function useAddress() {
  const ctx = useContext(AddressContext)
  if (!ctx) throw new Error('useAddress deve ser usado dentro de AddressProvider')
  return ctx
}
