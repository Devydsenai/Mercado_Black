import { useState, useEffect } from 'react'
import {
  CarouselContainer,
  CarouselTrack,
  CarouselItem,
  CarouselPrev,
  CarouselNext,
} from '@/components/carousels/styled.jsx'
import {
  LoadingCardsWrapper,
  LoadingBannerWrapper,
  LoadingBannerSlide,
  LoadingCloudsSection,
  LoadingProductSection,
} from './styled.jsx'
import { Link } from 'react-router-dom'
import { ProductDetailModal } from '@/components/ProductDetailModal/ProductDetailModal.jsx'
import {
  CardContainer,
  CardImageWrapper,
  CardBody,
  CardTitle,
  CardPrice,
} from '@/components/productCard/styled.jsx'

import Banner1 from '@/assets/01 Banner .svg'
import BannerBlack from '@/assets/BannerBlack.svg'
import BannerPrecos from '@/assets/BannerPreços.svg'
import CardAORUS from '@/assets/CardAORUS.svg'
import CardPc from '@/assets/CardPc.svg'
import CardPlaVidioRTX from '@/assets/CardPlaVidioRTX.svg'
import CardFoneDeo from '@/assets/CardFoneDeo.svg'
import CardMover from '@/assets/CardMover.svg'
import CardUX from '@/assets/CardUX.svg'
import CardSamsung from '@/assets/CardSamsung.svg'
import CardAsusProart from '@/assets/CardAsusProart.svg'
import CardGigabyte from '@/assets/CardGigabyte.svg'
import CardMsi from '@/assets/CardMsi.svg'
import CardHypepx from '@/assets/CardHypepx.svg'
import CardCorsair from '@/assets/CardCorsair.svg'
import CardMuscle from '@/assets/CardMuscle.svg'
import CardEletro from '@/assets/CardEletro.svg'
import CardProseAMD from '@/assets/CardProseAMD.svg'
import CardInfinix from '@/assets/CardInfinix.svg'
import CardSmart from '@/assets/CardSmart.svg'
import CardCordoba from '@/assets/CardCordoba.svg'
import PartnerRyzen from '@/assets/RYZEN.png'
import PartnerLG from '@/assets/LG.png'
import PartnerAdidas from '@/assets/ADIDAS.png'
import PartnerSony from '@/assets/SONY.png'
import PartnerIphone from '@/assets/IPHONE.png'
import PartnerLacoste from '@/assets/LACOSTE.png'
import PartnerLGLife from '@/assets/LGLIFE.png'
import PartnerLenovo from '@/assets/LENOVO.png'
import PartnerMI from '@/assets/MI.png'
import PartnerPlayboy from '@/assets/PLAYBPY.png'
import PartnerPhilco from '@/assets/PHILCO.png'
import PartnerAMD from '@/assets/AMD.png'
import PartnerDell from '@/assets/DELL.png'
import PartnerPuma from '@/assets/PUMA.png'
import PartnerNike from '@/assets/NIKE.png'
import PartnerNvidia from '@/assets/NVIDIA.png'
import PartnerMSI from '@/assets/MSI.png'

const PARCEIROS = [
  { src: PartnerRyzen, alt: 'Ryzen' },
  { src: PartnerLG, alt: 'LG' },
  { src: PartnerAdidas, alt: 'Adidas' },
  { src: PartnerSony, alt: 'Sony' },
  { src: PartnerIphone, alt: 'iPhone' },
  { src: PartnerLacoste, alt: 'Lacoste' },
  { src: PartnerLGLife, alt: 'LG Life' },
  { src: PartnerLenovo, alt: 'Lenovo' },
  { src: PartnerMI, alt: 'MI' },
  { src: PartnerPlayboy, alt: 'Playboy' },
  { src: PartnerPhilco, alt: 'Philco' },
  { src: PartnerAMD, alt: 'AMD' },
  { src: PartnerDell, alt: 'Dell' },
  { src: PartnerPuma, alt: 'Puma' },
  { src: PartnerNike, alt: 'Nike' },
  { src: PartnerNvidia, alt: 'Nvidia' },
  { src: PartnerMSI, alt: 'MSI' },
]

const BANNERS = [
  { src: Banner1, alt: 'Banner 1' },
  { src: BannerBlack, alt: 'Banner Mercado Black' },
  { src: BannerPrecos, alt: 'Banner Preços' },
]

const FEATURE_CARDS = [
  { title: 'Frete grátis', description: 'Benefício por ser sua primeira compra.', buttonText: 'Mostrar produtos', href: '/produtos', icon: '📦' },
  { title: 'Entre na sua conta', description: 'Aproveite ofertas para comprar tudo que quiser.', buttonText: 'Entrar na sua conta', href: '#', icon: '👤' },
  { title: 'Meios de pagamento', description: 'Pague suas compras com rapidez e segurança.', buttonText: 'Mostrar meios', href: '#', icon: '💳' },
  { title: 'Menos de R$100', description: 'Confira produtos com preços baixos.', buttonText: 'Mostrar produtos', href: '/produtos', icon: '💰' },
  { title: 'Mais vendidos', description: 'Explore os produtos que são tendência.', buttonText: 'Ir para Mais vendidos', href: '/produtos', icon: '🛍️' },
  { title: 'Compra garantida', description: 'Você pode devolver sua compra grátis.', buttonText: 'Como funciona', href: '#', icon: '✓' },
  { title: 'Lojas oficiais', description: 'Suas marcas preferidas.', buttonText: 'Mostrar lojas', href: '/produtos', icon: '🏪' },
  { title: 'Nossas categorias', description: 'Encontre celulares, roupas, imóveis e muito mais.', buttonText: 'Ir para Categorias', href: '/produtos', icon: '📋' },
]

const INTERVAL_MS = 4000

const IconBox = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
)
const IconUser = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
)
const IconWallet = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
)
const IconMoney = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const IconBag = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
)
const IconCheck = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const IconStore = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
)
const IconGrid = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
)

const CARD_ICONS = [IconBox, IconUser, IconWallet, IconMoney, IconBag, IconCheck, IconStore, IconGrid]

const TOTAL_CARDS = FEATURE_CARDS.length

const OFERTA_DO_DIA = [
  { id: 1, nome: 'Placa AORUS RTX', descricao: 'Alta performance para gaming', preco: 4989.99, imagem: CardAORUS },
  { id: 2, nome: 'PC Gamer Completo', descricao: 'Configuração pronta para jogos', preco: 4999.99, imagem: CardPc },
  { id: 3, nome: 'ASUS GeForce RTX 5080', descricao: '16GB ROG ASTRAL WHITE OC', preco: 3999.99, imagem: CardPlaVidioRTX },
  { id: 4, nome: 'Headset HyperX Cloud Alpha', descricao: '7.1 Surround Sound RGB', preco: 699.99, imagem: CardFoneDeo },
  { id: 5, nome: 'móvel', descricao: 'Espaçosa e ergonômica', preco: 479.99, imagem: CardMover },
  { id: 6, nome: 'Monitor Samsung Odyssey G9', descricao: '49" 144Hz QHD Curvo', preco: 5999.99, imagem: CardUX },
]

const MAIS_VENDIDOS = [
  { id: 7, nome: 'Smart TV Samsung 55"', descricao: '4K UHD Crystal', preco: 2799.99, imagem: CardSamsung },
  { id: 8, nome: 'ASUS ProArt Display', descricao: 'Monitor profissional', preco: 4299.99, imagem: CardAsusProart },
  { id: 9, nome: 'Placa Mãe Gigabyte', descricao: 'DDR5 para Intel', preco: 1899.99, imagem: CardGigabyte },
  { id: 10, nome: 'Placa de Vídeo MSI', descricao: 'GeForce RTX Gaming', preco: 3499.99, imagem: CardMsi },
  { id: 11, nome: 'Headset HyperX Cloud II', descricao: 'Som 7.1 Virtual', preco: 499.99, imagem: CardHypepx },
  { id: 12, nome: 'Teclado Corsair K70', descricao: 'RGB Mecânico', preco: 899.99, imagem: CardCorsair },
]

const MAIS_VENDIDO_SEMANA = [
  { id: 13, nome: 'Suplemento Whey Protein', descricao: 'Muscle 2kg', preco: 149.99, imagem: CardMuscle },
  { id: 14, nome: 'Ventilador Eletrolux', descricao: 'Turbo Force', preco: 199.99, imagem: CardEletro },
  { id: 15, nome: 'Processador AMD Ryzen', descricao: '8 núcleos 16 threads', preco: 1299.99, imagem: CardProseAMD },
  { id: 16, nome: 'Smartphone Infinix', descricao: '128GB 8GB RAM', preco: 999.99, imagem: CardInfinix },
  { id: 17, nome: 'Smartwatch Fitness', descricao: 'Monitor cardíaco', preco: 449.99, imagem: CardSmart },
  { id: 18, nome: 'Violão Cordoba', descricao: 'Classical C5', preco: 19.99, imagem: CardCordoba },
]

const PRODUCT_CARD_WIDTH = 276

function ProductCarouselSection({ title, products, linkText = 'Ir para Mais vendidos' }) {
  const [index, setIndex] = useState(0)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const total = products.length

  const goPrev = () => setIndex((i) => Math.max(0, i - 1))
  const goNext = () => setIndex((i) => Math.min(total - 1, i + 1))

  return (
    <LoadingProductSection title={title} linkText={linkText}>
      <CarouselContainer className="relative overflow-hidden px-2">
        <CarouselPrev
          onClick={goPrev}
          className="!left-1 sm:!left-2 !rounded-full !bg-white dark:!bg-card !p-1.5 !shadow-md hover:!bg-muted/80 transition-all opacity-0 group-hover:opacity-100 group-hover:disabled:opacity-40 border border-border disabled:pointer-events-none"
          aria-label="Anterior"
          disabled={index === 0}
        >
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </CarouselPrev>
        <CarouselNext
          onClick={goNext}
          className="!right-1 sm:!right-2 !rounded-full !bg-white dark:!bg-card !p-1.5 !shadow-md hover:!bg-muted/80 transition-all opacity-0 group-hover:opacity-100 group-hover:disabled:opacity-40 border border-border disabled:pointer-events-none"
          aria-label="Próximo"
          disabled={index >= total - 1}
        >
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </CarouselNext>
        <CarouselTrack
          className="duration-500 gap-x-4 px-1"
          style={{ transform: `translateX(-${index * PRODUCT_CARD_WIDTH}px)` }}
        >
          {products.map((p) => (
            <CarouselItem key={p.id} className="!min-w-[260px] !flex-shrink-0 group">
              <button
                type="button"
                onClick={() => setProdutoSelecionado(p)}
                className="block w-full text-left no-underline"
              >
                <CardContainer className="w-[260px] min-h-[200px] bg-white dark:bg-card overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer">
                  <CardImageWrapper className="w-full aspect-[4/3] rounded-t-lg bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img src={p.imagem} alt={p.nome} className="max-w-full max-h-full object-contain" />
                  </CardImageWrapper>
                  <div className="p-3 flex flex-col gap-1 flex-shrink-0">
                    <CardTitle className="text-sm font-medium text-foreground line-clamp-2">{p.nome}</CardTitle>
                    <p className="text-xs text-muted-foreground line-clamp-1">{p.descricao}</p>
                    <p className="text-sm font-semibold text-foreground">
                      R$ {Number(p.preco).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </CardContainer>
              </button>
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>
      {produtoSelecionado && (
        <ProductDetailModal
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </LoadingProductSection>
  )
}

function Loading() {
  const [bannerIndex, setBannerIndex] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setBannerIndex((i) => (i + 1) % BANNERS.length),
      INTERVAL_MS
    )
    return () => clearInterval(timer)
  }, [])

  const goBannerPrev = () => setBannerIndex((i) => (i - 1 + BANNERS.length) % BANNERS.length)
  const goBannerNext = () => setBannerIndex((i) => (i + 1) % BANNERS.length)

  const goCardPrev = () => setCardIndex((i) => Math.max(0, i - 1))
  const goCardNext = () => setCardIndex((i) => Math.min(TOTAL_CARDS - 1, i + 1))

  return (
    <>
      <LoadingBannerWrapper>
        <CarouselContainer className="group w-full h-full relative">
          <CarouselPrev
            onClick={goBannerPrev}
            className="!left-2 sm:!left-4 !rounded-full !bg-white dark:!bg-card !p-3 !shadow-lg hover:!bg-muted/80 transition-all opacity-0 group-hover:opacity-100 border border-border"
            aria-label="Banner anterior"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </CarouselPrev>
          <CarouselNext
            onClick={goBannerNext}
            className="!right-2 sm:!right-4 !rounded-full !bg-white dark:!bg-card !p-3 !shadow-lg hover:!bg-muted/80 transition-all opacity-0 group-hover:opacity-100 border border-border"
            aria-label="Próximo banner"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CarouselNext>
          <CarouselTrack
            className="duration-700"
            style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
          >
            {BANNERS.map(({ src, alt }, i) => (
              <CarouselItem key={i}>
                <LoadingBannerSlide src={src} alt={alt} />
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>
      </LoadingBannerWrapper>
      <LoadingCardsWrapper>
        <CarouselContainer className="group relative overflow-hidden">
          <CarouselPrev
            onClick={goCardPrev}
            className="!left-2 sm:!left-4 !rounded-full !bg-white dark:!bg-card !p-2.5 !shadow-lg hover:!bg-muted/80 transition-all opacity-0 group-hover:opacity-100 group-hover:disabled:opacity-40 border border-border disabled:pointer-events-none"
            aria-label="Cards anteriores"
            disabled={cardIndex === 0}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </CarouselPrev>
          <CarouselNext
            onClick={goCardNext}
            className="!right-2 sm:!right-4 !rounded-full !bg-white dark:!bg-card !p-2.5 !shadow-lg hover:!bg-muted/80 transition-all opacity-0 group-hover:opacity-100 group-hover:disabled:opacity-40 border border-border disabled:pointer-events-none"
            aria-label="Próximos cards"
            disabled={cardIndex >= TOTAL_CARDS - 1}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CarouselNext>
          <CarouselTrack
            className="duration-500 gap-4"
            style={{ transform: `translateX(-${cardIndex * (196)}px)` }}
          >
            {FEATURE_CARDS.map((card, i) => {
              const Icon = CARD_ICONS[i]
              return (
                <CarouselItem key={card.title} className="!min-w-[180px] sm:!min-w-[200px] !flex-shrink-0">
                  <Link
                    to={card.href}
                    className="w-[180px] sm:w-[200px] rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col p-4 no-underline h-full"
                  >
                    <h3 className="font-bold text-foreground text-sm sm:text-base mb-2">{card.title}</h3>
                    <div className="flex-1 flex items-center justify-center my-3 text-primary">
                      <Icon />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{card.description}</p>
                    <span className="text-sm font-medium text-primary hover:underline">{card.buttonText}</span>
                  </Link>
                </CarouselItem>
              )
            })}
          </CarouselTrack>
        </CarouselContainer>
      </LoadingCardsWrapper>
      <ProductCarouselSection title="Oferta do dia" products={OFERTA_DO_DIA} />
      <ProductCarouselSection title="Mais vendidos" products={MAIS_VENDIDOS} />
      <ProductCarouselSection title="Mais vendido da semana" products={MAIS_VENDIDO_SEMANA} />
      <section className="w-full py-10 overflow-hidden" aria-label="Parceiros">
        <div className="flex animate-marquee-parceiros w-max gap-16">
          {[...PARCEIROS, ...PARCEIROS].map((p, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-40 px-6">
              <img src={p.src} alt={p.alt} className="max-h-36 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
      <LoadingCloudsSection />
    </>
  )
}

export default Loading

