import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-foreground mb-6">Home</h1>
      <p className="text-muted-foreground mb-4">Bem-vindo ao Mercado Black!</p>
      <Link
        to="/produtos"
        className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
      >
        Ver Produtos
      </Link>
    </div>
  )
}

export default Home
