/** ProductsContext - Produtos cadastrados localmente (fallback quando sem token) */
import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'mercadoblack_produtos_cadastrados'

const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setProdutos(Array.isArray(parsed) ? parsed : [])
      }
    } catch {
      setProdutos([])
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(produtos))
    } catch {
      // ignore
    }
  }, [produtos])

  const addProduct = useCallback((produto) => {
    const id = Date.now()
    const novo = {
      id,
      nome: produto.nome || '',
      descricao: produto.descricao || '',
      preco: Number(produto.preco) || 0,
      imagem: produto.imagem || '', // URL
    }
    setProdutos((prev) => [...prev, novo])
    return id
  }, [])

  const removeProduct = useCallback((productId) => {
    setProdutos((prev) => prev.filter((p) => p.id !== productId))
  }, [])

  return (
    <ProductsContext.Provider value={{ produtos, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const ctx = useContext(ProductsContext)
  if (!ctx) throw new Error('useProducts deve ser usado dentro de ProductsProvider')
  return ctx
}
