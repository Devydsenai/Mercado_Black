import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProducts } from '@/contexts/ProductsContext.jsx'

function CadastrarProduto() {
  const { addProduct } = useProducts()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    imagem: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nome.trim()) {
      alert('Preencha o nome do produto.')
      return
    }
    const preco = parseFloat(String(form.preco).replace(',', '.'))
    if (isNaN(preco) || preco < 0) {
      alert('Preencha um preço válido.')
      return
    }
    addProduct({
      nome: form.nome.trim(),
      descricao: form.descricao.trim(),
      preco,
      imagem: form.imagem.trim(),
    })
    setForm({ nome: '', descricao: '', preco: '', imagem: '' })
    navigate('/produtos')
  }

  return (
    <div className="min-h-[60vh] max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Cadastrar produto</h1>
        <Link to="/produtos" className="text-primary hover:underline text-sm font-medium">
          Ver produtos
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-xl p-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Nome do produto</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Ex: Fone Bluetooth Premium"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descreva o produto"
            rows={3}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Preço (R$)</label>
          <input
            type="text"
            name="preco"
            value={form.preco}
            onChange={handleChange}
            placeholder="Ex: 99,90"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">URL da imagem</label>
          <input
            type="url"
            name="imagem"
            value={form.imagem}
            onChange={handleChange}
            placeholder="https://exemplo.com/imagem.jpg"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
          />
          {form.imagem && (
            <div className="mt-3 p-4 border border-border rounded-lg bg-muted/30">
              <p className="text-xs text-muted-foreground mb-2">Preview do card:</p>
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-muted flex items-center justify-center border border-border">
                <img
                  src={form.imagem}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const fallback = e.target.nextElementSibling
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                <span className="hidden text-xs text-muted-foreground p-2 text-center">
                  URL inválida
                </span>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Cadastrar e ir para Produtos
        </button>
      </form>
    </div>
  )
}

export default CadastrarProduto
