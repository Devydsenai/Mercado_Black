import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div className="min-h-[60vh] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Sobre o Mercado Black</h1>
        <p className="text-lg text-muted-foreground">
          Seu marketplace de confiança, trabalhando com parceiros de marca e um programa de afiliados que cresce junto com você.
        </p>
      </div>

      <div className="space-y-10">
        {/* O que fazemos */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">O que fazemos</h2>
          <p className="text-muted-foreground mb-4">
            O Mercado Black é uma plataforma de e-commerce que conecta você a produtos das melhores marcas. 
            Trabalhamos em parceria com lojas oficiais e afiliados para oferecer variedade, ofertas e uma 
            experiência de compra completa e segura.
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Catálogo de produtos de tecnologia, eletrônicos, moda e muito mais</li>
            <li>Parcerias com marcas reconhecidas no mercado</li>
            <li>Programa de afiliados para quem quer divulgar e ganhar comissão</li>
            <li>Pagamento seguro com PIX, cartão e boleto</li>
            <li>Compra garantida e suporte ao cliente</li>
          </ul>
        </section>

        {/* Parceiros */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Nossos parceiros</h2>
          <p className="text-muted-foreground mb-4">
            Trabalhamos com as principais marcas do mercado. Cada parceiro passa por uma curadoria para garantir 
            qualidade e confiabilidade. Nossas marcas parceiras incluem Ryzen, LG, Sony, Adidas, Nike, Dell, 
            Lenovo, Nvidia, MSI, Corsair, HyperX e muitas outras.
          </p>
          <p className="text-muted-foreground">
            Essa parceria nos permite oferecer produtos originais, ofertas exclusivas e preços competitivos 
            para você fazer suas compras com segurança.
          </p>
        </section>

        {/* Afiliados */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Programa de afiliados</h2>
          <p className="text-muted-foreground mb-4">
            O Mercado Black possui um programa de afiliados para quem quer divulgar produtos e ganhar 
            comissão por cada venda. Você recebe links exclusivos, compartilha em suas redes ou site 
            e é remunerado quando uma compra é realizada pelo seu link.
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
            <li>Comissão atrativa por venda</li>
            <li>Pagamento mensal</li>
            <li>Relatórios de desempenho em tempo real</li>
            <li>Suporte dedicado para afiliados</li>
          </ul>
          <Link
            to="/afiliados"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Saiba mais sobre Afiliados
          </Link>
        </section>

        {/* O que oferecemos no site */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">O que oferecemos no site</h2>
          <p className="text-muted-foreground mb-4">
            O Mercado Black oferece uma experiência completa de compra online:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
              <span className="text-2xl">🔐</span>
              <div>
                <h3 className="font-semibold text-foreground">Login seguro</h3>
                <p className="text-sm text-muted-foreground">Entrada via e-mail e senha (banco de dados) ou Clerk (Google e redes sociais).</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
              <span className="text-2xl">🔍</span>
              <div>
                <h3 className="font-semibold text-foreground">Busca de produtos</h3>
                <p className="text-sm text-muted-foreground">Encontre o que precisa pesquisando por nome ou descrição.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
              <span className="text-2xl">📦</span>
              <div>
                <h3 className="font-semibold text-foreground">Cadastrar produto</h3>
                <p className="text-sm text-muted-foreground">Adicione produtos que ainda não estão no catálogo, com imagem por URL.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
              <span className="text-2xl">🛒</span>
              <div>
                <h3 className="font-semibold text-foreground">Carrinho e checkout</h3>
                <p className="text-sm text-muted-foreground">Carrinho persistente e pagamento com PIX, cartão ou boleto.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
              <span className="text-2xl">👤</span>
              <div>
                <h3 className="font-semibold text-foreground">Minha conta</h3>
                <p className="text-sm text-muted-foreground">Acompanhe seus dados e configurações em um único lugar.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-foreground">Endereço por CEP</h3>
                <p className="text-sm text-muted-foreground">Consulta de endereço automática pelo CEP para facilitar a entrega.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Fale conosco</h2>
          <p className="text-muted-foreground mb-4">
            Dúvidas, sugestões ou parcerias? Entre em contato.
          </p>
          <a
            href="mailto:contato@mercadoblack.com"
            className="text-primary hover:underline font-medium"
          >
            contato@mercadoblack.com
          </a>
        </section>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/home" className="text-primary hover:underline text-sm font-medium">
          ← Voltar para Home
        </Link>
        <Link to="/produtos" className="text-primary hover:underline text-sm font-medium">
          Ver produtos
        </Link>
      </div>
    </div>
  )
}

export default Sobre
