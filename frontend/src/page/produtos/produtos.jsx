import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ProductDetailModal } from '@/components/ProductDetailModal/ProductDetailModal.jsx'
import { useProducts } from '@/contexts/ProductsContext.jsx'
import { api } from '@/services/api.js'
import CardAORUS from '@/assets/CardAORUS.svg'
import CardPc from '@/assets/CardPc.svg'
import CardPlaVidioRTX from '@/assets/CardPlaVidioRTX.svg'
import CardFoneDeo from '@/assets/CardFoneDeo.svg'
import CardMover from '@/assets/CardMover.svg'
import CardUX from '@/assets/CardUX.svg'

import {
  CardContainer,
  CardImageWrapper,
  CardBody,
  CardTitle,
  CardPrice,
} from '@/components/productCard/styled.jsx'
import { ProdutosGrid, ProdutosTitle } from './styled'

const PRODUTOS_DEMO = [
  {
    id: 1,
    nome: 'Placa AORUS RTX',
    descricao: 'Alta performance para gaming',
    preco: 4989.99,
    imagem: CardAORUS,
  },
  {
    id: 2,
    nome: 'PC Gamer Completo',
    descricao: 'Configuração pronta para jogos',
    preco: 4999.99,
    imagem: CardPc,
  },
  {
    id: 3,
    nome: 'ASUS GeForce RTX 5080',
    descricao: 'ASUS GeForce RTX 5080 16GB ROG ASTRAL WHITE OC',
    preco: 3999.99,
    imagem: CardPlaVidioRTX,
  },
  {
    id: 4,
    nome: 'Headset HyperX Cloud Alpha S 7.1 Surround Sound RGB',
    descricao: '7.1 Surround Sound RGB',
    preco: 699.99,
    imagem: CardFoneDeo,
  },
  {
    id: 5,
    nome: 'móvel',
    descricao: 'Espaçosa e ergonômica',
    preco: 479.99,
    imagem: CardMover,
  },
  {
    id: 6,
    nome: 'Monitor Samsung Odyssey G9 49" 49WQ95T Gaming 1000R Curvo 144Hz QHD 21:9 1000R Curvo 144Hz QHD 21:9',
    descricao: '49" 144Hz QHD Curvo',
    preco: 5999.99,
    imagem: CardUX,
  },
]

function Produtos() {
  const [searchParams] = useSearchParams()
  const termoBusca = (searchParams.get('q') || '').trim().toLowerCase()
  const { produtos: produtosCadastrados } = useProducts()
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await api.listarProdutos()
        const arr = Array.isArray(dados) ? dados : []
        const completa = arr.length >= 6 ? arr : [...arr, ...PRODUTOS_DEMO].slice(0, 6)
        setProdutos(completa)
      } catch {
        setProdutos(PRODUTOS_DEMO)
      } finally {
        setLoading(false)
      }
    }
    carregar()
  }, [])

  const lista = useMemo(() => {
    const idsCadastrados = new Set(produtosCadastrados.map((p) => p.id))
    const daApi = produtos.filter((p) => !idsCadastrados.has(p.id))
    const todos = [...produtosCadastrados, ...daApi]
    if (!termoBusca) return todos
    return todos.filter((p) => {
      const nome = (p.nome || '').toLowerCase()
      const descricao = (p.descricao || '').toLowerCase()
      return nome.includes(termoBusca) || descricao.includes(termoBusca)
    })
  }, [produtosCadastrados, produtos, termoBusca])

  return (
    <div className="min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mb-6">
        <ProdutosTitle className="text-center sm:text-left">
          {termoBusca ? `Busca: "${searchParams.get('q') || termoBusca}"` : 'Produtos'}
        </ProdutosTitle>
        <div className="flex items-center gap-4">
          <Link
            to="/cadastrar-produto"
            className="text-primary hover:underline font-medium text-sm"
          >
            Cadastrar Produto
          </Link>
          <Link
            to="/home"
            className="text-primary hover:underline font-medium text-sm"
          >
            Voltar
          </Link>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center py-12 w-full">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : lista.length === 0 ? (
        <p className="text-muted-foreground text-center py-12 w-full">
          {termoBusca ? `Nenhum produto encontrado para "${searchParams.get('q') || termoBusca}".` : 'Nenhum produto cadastrado.'}
        </p>
      ) : (
        <ProdutosGrid className="w-full">
          {lista.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setProdutoSelecionado(p)}
              className="text-left w-full"
            >
              <CardContainer className="flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow">
                <CardImageWrapper>
                  {p.imagem ? (
                    <img
                      src={p.imagem}
                      alt={p.nome}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-4xl">
                      📦
                    </div>
                  )}
                </CardImageWrapper>
                <CardBody className="flex-1 flex flex-col">
                  <CardTitle>{p.nome}</CardTitle>
                  {p.descricao && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {p.descricao}
                    </p>
                  )}
                  <CardPrice>
                    R$ {Number(p.preco).toFixed(2).replace('.', ',')}
                  </CardPrice>
                </CardBody>
              </CardContainer>
            </button>
          ))}
        </ProdutosGrid>
      )}
      {produtoSelecionado && (
        <ProductDetailModal
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </div>
  )
}

export default Produtos
