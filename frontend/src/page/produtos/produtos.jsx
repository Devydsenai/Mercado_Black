import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '@/services/api.js'
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
    nome: 'Produto Exemplo 1',
    descricao: 'Descrição do produto de exemplo.',
    preco: 49.9,
    imagem: null,
  },
  {
    id: 2,
    nome: 'Produto Exemplo 2',
    descricao: 'Outro produto de demonstração.',
    preco: 29.9,
    imagem: null,
  },
  {
    id: 3,
    nome: 'Produto Exemplo 3',
    descricao: 'Item disponível para compra.',
    preco: 99.9,
    imagem: null,
  },
  {
    id: 4,
    nome: 'Produto Exemplo 4',
    descricao: 'Produto de qualidade.',
    preco: 19.9,
    imagem: null,
  },
  {
    id: 5,
    nome: 'Produto Exemplo 5',
    descricao: 'Descrição breve do produto.',
    preco: 79.9,
    imagem: null,
  },
  {
    id: 6,
    nome: 'Produto Exemplo 6',
    descricao: 'Último produto da lista.',
    preco: 59.9,
    imagem: null,
  },
]

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

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

  const lista = produtos

  return (
    <div className="min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mb-6">
        <ProdutosTitle className="text-center sm:text-left">Produtos</ProdutosTitle>
        <Link
          to="/home"
          className="text-primary hover:underline font-medium text-sm"
        >
          Voltar
        </Link>
      </div>
      {loading ? (
        <div className="flex justify-center py-12 w-full">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : (
        <ProdutosGrid className="w-full">
          {lista.map((p) => (
            <CardContainer key={p.id}>
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
              <CardBody>
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
          ))}
        </ProdutosGrid>
      )}
    </div>
  )
}

export default Produtos
