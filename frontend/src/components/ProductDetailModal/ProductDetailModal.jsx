import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/contexts/CartContext.jsx'

export function ProductDetailModal({ produto, onClose }) {
  const [quantidade, setQuantidade] = useState(1)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  if (!produto) return null

  const handleComprar = () => {
    addToCart(produto, quantidade)
    onClose()
    navigate('/checkout')
  }

  const handleAdicionarCarrinho = () => {
    addToCart(produto, quantidade)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-card border border-border rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="aspect-square sm:aspect-[4/3] bg-muted flex items-center justify-center p-6">
            {produto.imagem ? (
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <span className="text-6xl">📦</span>
            )}
          </div>

          <div className="p-6">
            <h2 id="modal-title" className="text-xl font-bold text-foreground mb-2">
              {produto.nome}
            </h2>
            <p className="text-foreground mb-4 leading-relaxed">
              {produto.descricao || 'Produto de qualidade do Mercado Black.'}
            </p>
            <p className="text-2xl font-bold text-primary mb-4">
              R$ {Number(produto.preco).toFixed(2).replace('.', ',')}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-foreground">Quantidade:</span>
              <div className="flex items-center border border-border rounded-lg">
                <button
                  type="button"
                  onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors rounded-l-lg"
                  aria-label="Diminuir"
                >
                  −
                </button>
                <span className="w-12 text-center font-semibold">{quantidade}</span>
                <button
                  type="button"
                  onClick={() => setQuantidade((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors rounded-r-lg"
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleComprar}
                className="flex-1 py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Comprar
              </button>
              <button
                type="button"
                onClick={handleAdicionarCarrinho}
                className="flex-1 py-3 px-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
