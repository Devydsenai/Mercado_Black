import { Link } from 'react-router-dom'
import { useCart } from '@/contexts/CartContext.jsx'

function Carrinho() {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  return (
    <div className="min-h-[60vh] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-foreground">Carrinho</h1>
        <Link
          to="/home"
          className="text-primary hover:underline font-medium text-sm"
        >
          Continuar comprando
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border rounded-lg">
          <p className="text-muted-foreground mb-4">Seu carrinho está vazio.</p>
          <Link
            to="/home"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ver produtos
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-card border border-border rounded-lg"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                {item.imagem ? (
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    📦
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground line-clamp-2">
                  {item.nome}
                </h3>
                {item.descricao && (
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
                    {item.descricao}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 border border-border rounded">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, (item.quantidade || 1) - 1)}
                      className="px-2 py-1 text-sm hover:bg-muted transition-colors"
                      aria-label="Diminuir quantidade"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-sm min-w-[2rem] text-center">
                      {item.quantidade || 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, (item.quantidade || 1) + 1)}
                      className="px-2 py-1 text-sm hover:bg-muted transition-colors"
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-destructive hover:underline"
                  >
                    Remover
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between flex-shrink-0">
                <p className="font-bold text-foreground">
                  R$ {(Number(item.preco) * (item.quantidade || 1)).toFixed(2).replace('.', ',')}
                </p>
                <span className="text-xs text-muted-foreground">
                  R$ {Number(item.preco).toFixed(2).replace('.', ',')} un.
                </span>
              </div>
            </div>
          ))}

          <div className="mt-8 p-4 bg-card border border-border rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-lg font-bold text-foreground">
              Total: R$ {total.toFixed(2).replace('.', ',')}
            </p>
            <Link
              to="/checkout"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carrinho
