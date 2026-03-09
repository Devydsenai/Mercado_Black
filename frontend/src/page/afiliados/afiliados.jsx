import { Link } from 'react-router-dom'

function Afiliados() {
  return (
    <div className="min-h-[60vh] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Programa de Afiliados</h1>
        <p className="text-muted-foreground">
          Divulgue os produtos do Mercado Black e ganhe comissão por cada venda.
        </p>
      </div>

      <div className="space-y-6 bg-card border border-border rounded-xl p-6">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Como funciona</h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Cadastre-se no programa de afiliados</li>
            <li>Receba seus links exclusivos de produtos</li>
            <li>Compartilhe nas redes sociais ou seu site</li>
            <li>Ganhe comissão a cada venda realizada pelo seu link</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Vantagens</h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Comissão atrativa por venda</li>
            <li>Pagamento mensal</li>
            <li>Relatórios de desempenho em tempo real</li>
            <li>Suporte dedicado para afiliados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Quero participar</h2>
          <p className="text-muted-foreground mb-4">
            Entre em contato conosco para solicitar sua adesão ao programa de afiliados.
          </p>
          <a
            href="mailto:afiliados@mercadoblack.com"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contatar Afiliados
          </a>
        </section>
      </div>

      <div className="mt-6">
        <Link to="/home" className="text-primary hover:underline text-sm font-medium">
          ← Voltar
        </Link>
      </div>
    </div>
  )
}

export default Afiliados
