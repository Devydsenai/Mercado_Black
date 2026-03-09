import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = useCallback((product, quantidade = 1) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantidade: i.quantidade + quantidade } : i
        )
      }
      return [...prev, { ...product, quantidade }]
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setItems((prev) => prev.filter((i) => i.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId, quantidade) => {
    if (quantidade <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== productId))
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.id === productId ? { ...i, quantidade } : i))
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const parsePreco = (val) => {
    if (val == null) return 0
    const n = typeof val === 'number' ? val : parseFloat(String(val).replace(',', '.'))
    return Number.isFinite(n) ? n : 0
  }

  const total = Math.round(
    items.reduce((acc, i) => {
      const preco = parsePreco(i.preco)
      const qtd = Math.max(1, parseInt(i.quantidade, 10) || 1)
      return acc + preco * qtd
    }, 0) * 100
  ) / 100

  const count = items.reduce((acc, i) => acc + Math.max(1, Number(i.quantidade) || 1), 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart deve ser usado dentro de CartProvider')
  return ctx
}
