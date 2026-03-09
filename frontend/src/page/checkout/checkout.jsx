import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '@/contexts/CartContext.jsx'
import { Confetti } from '@/components/Confetti/Confetti.jsx'

const FRETE = 10

function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [metodo, setMetodo] = useState('cartao')
  const [loading, setLoading] = useState(false)
  const [pagamentoAprovado, setPagamentoAprovado] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const [formCartao, setFormCartao] = useState({
    nome: '',
    numero: '',
    validade: '',
    cvv: '',
  })

  const totalComFrete = total + FRETE

  useEffect(() => {
    if (items.length === 0 && !pagamentoAprovado) {
      navigate('/carrinho')
    }
  }, [items.length, pagamentoAprovado, navigate])

  const formatarNumero = (v) =>
    v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ').trim()
  const formatarValidade = (v) => {
    const n = v.replace(/\D/g, '').slice(0, 4)
    return n.length <= 2 ? n : `${n.slice(0, 2)}/${n.slice(2)}`
  }

  const handleCartaoChange = (e) => {
    const { name, value } = e.target
    let novo = value
    if (name === 'numero') novo = formatarNumero(value)
    if (name === 'validade') novo = formatarValidade(value)
    if (name === 'cvv') novo = value.replace(/\D/g, '').slice(0, 3)
    setFormCartao((p) => ({ ...p, [name]: novo }))
  }

  const simularPagamento = () => {
    if (metodo === 'cartao') {
      const ok =
        formCartao.nome.trim() &&
        formCartao.numero.replace(/\s/g, '').length >= 16 &&
        formCartao.validade.length >= 5 &&
        formCartao.cvv.length >= 3
      if (!ok) {
        alert('Preencha os dados do cartão corretamente.')
        return
      }
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setPagamentoAprovado(true)
      setShowConfetti(true)
      clearCart()
    }, 1800)
  }

  const novoPagamento = () => {
    setPagamentoAprovado(false)
    setShowConfetti(false)
    setMetodo('cartao')
    setFormCartao({ nome: '', numero: '', validade: '', cvv: '' })
    navigate('/home')
  }

  const copiarTexto = async (texto) => {
    try {
      await navigator.clipboard.writeText(texto)
      alert('Copiado!')
    } catch {
      alert('Não foi possível copiar.')
    }
  }

  const pixCode =
    '00020126580014BR.GOV.BCB.PIX0136pix-mercadoblack@teste.com520400005303986540' +
    totalComFrete.toFixed(2).replace('.', '') +
    '5802BR5920MERCADO BLACK6009SAO PAULO62070503***6304ABCD'

  const boletoCodigo = '34191.79001 01043.510047 91020.150008 5 91340026000'
  const boletoVencimento = '15/04/2026'

  if (pagamentoAprovado) {
    return (
      <>
        <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
        <div className="min-h-[60vh] max-w-lg mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-xl p-8 text-center shadow-sm">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-3xl font-bold text-green-600 dark:text-green-400">
            ✓
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Pagamento aprovado</h2>
          <p className="text-muted-foreground mb-6">
            Sua compra foi processada com sucesso na simulação.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Método</span>
              <strong>{metodo === 'cartao' ? 'Cartão' : metodo === 'pix' ? 'PIX' : 'Boleto'}</strong>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <strong>R$ {totalComFrete.toFixed(2).replace('.', ',')}</strong>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <strong className="text-green-600">Aprovado</strong>
            </div>
          </div>
          <button
            type="button"
            onClick={novoPagamento}
            className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Continuar comprando
          </button>
        </div>
      </div>
      </>
    )
  }

  if (items.length === 0) return null

  return (
    <div className="min-h-[60vh] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/carrinho" className="text-primary hover:underline text-sm font-medium">
          ← Voltar ao carrinho
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Forma de pagamento</h2>
                <p className="text-sm text-muted-foreground mt-1">Ambiente de demonstração</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                Compra segura
              </span>
            </div>

            <div className="flex gap-3 mb-6 flex-wrap">
              {[
                { id: 'cartao', label: '💳 Cartão' },
                { id: 'pix', label: '⚡ PIX' },
                { id: 'boleto', label: '🧾 Boleto' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMetodo(m.id)}
                  className={`flex-1 min-w-[100px] py-3 px-4 rounded-lg border font-semibold transition-colors ${
                    metodo === m.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {metodo === 'cartao' && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Nome no cartão
                  </label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome impresso no cartão"
                    value={formCartao.nome}
                    onChange={handleCartaoChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Número do cartão
                  </label>
                  <input
                    type="text"
                    name="numero"
                    placeholder="0000 0000 0000 0000"
                    value={formCartao.numero}
                    onChange={handleCartaoChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Validade
                    </label>
                    <input
                      type="text"
                      name="validade"
                      placeholder="MM/AA"
                      value={formCartao.validade}
                      onChange={handleCartaoChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={formCartao.cvv}
                      onChange={handleCartaoChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {metodo === 'pix' && (
              <div className="bg-muted/30 border border-border rounded-xl p-6 mb-6">
                <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/50 font-semibold text-muted-foreground text-sm text-center">
                  QR CODE PIX
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Escaneie com o app do banco ou copie o código.
                </p>
                <textarea
                  readOnly
                  value={pixCode}
                  className="w-full h-24 p-3 text-sm border border-border rounded-lg bg-muted/30 resize-none mb-3"
                />
                <button
                  type="button"
                  onClick={() => copiarTexto(pixCode)}
                  className="py-2 px-4 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  Copiar código PIX
                </button>
              </div>
            )}

            {metodo === 'boleto' && (
              <div className="bg-muted/30 border border-border rounded-xl p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Pague em qualquer banco, lotérica ou app.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Código</span>
                    <p className="font-mono text-sm break-all">{boletoCodigo}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Vencimento</span>
                    <p className="font-semibold">{boletoVencimento}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copiarTexto(boletoCodigo)}
                  className="py-2 px-4 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  Copiar código do boleto
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={simularPagamento}
              disabled={loading}
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Processando...' : 'Confirmar pagamento'}
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-4">
            <h3 className="font-bold text-foreground mb-4">Resumo da compra</h3>
            <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    {item.imagem ? (
                      <img
                        src={item.imagem}
                        alt={item.nome}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">📦</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground line-clamp-2">{item.nome}</p>
                    <span className="text-xs text-muted-foreground">
                      {item.quantidade || 1}x R$ {Number(item.preco).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t border-border pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Produtos</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Frete</span>
                <span>R$ {FRETE.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total</span>
                <span>R$ {totalComFrete.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
