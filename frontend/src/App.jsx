/**
 * App - Layout principal, header, rotas e footer
 * Auth: Clerk OU custom (MySQL). Rotas protegidas via ProtectedRoute.
 */
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/react'
import { useAuth } from '@/contexts/useAuth.js'
import {
  HeaderContainer,
  HeaderInner,
  HeaderTop,
  HeaderLogoArea,
  HeaderLogo,
  HeaderLogoText,
  HeaderAddress,
  HeaderRight,
  HeaderPromo,
  HeaderNav,
  HeaderNavLinks,
  HeaderUserLinks,
} from '@/components/header/styled'
import HeaderSearchBar from '@/components/header/HeaderSearchBar.jsx'
import { IconCart } from '@/components/icons/Icons.jsx'
import { UserMenu } from '@/components/userMenu'
import { HeaderAddressCep } from '@/components/header/HeaderAddressCep.jsx'
import { ThemeToggle } from '@/components/themeToggle/ThemeToggle'
import { FooterContainer, FooterInner, FooterGrid, FooterBottom } from '@/components/footer/styled'
import Home from '@/page/Home/home'
import Login from '@/page/login/login'
import Cadastro from '@/page/cadastro/cadastro'
import Entrar from '@/page/entrar/entrar'
import Cadastrar from '@/page/cadastrar/cadastrar'
import Produtos from '@/page/produtos/produtos'
import Carrinho from '@/page/carrinho/carrinho'
import Checkout from '@/page/checkout/checkout'
import Sobre from '@/page/sobre/sobre'
import CadastrarProduto from '@/page/cadastrar-produto/cadastrar-produto'
import Afiliados from '@/page/afiliados/afiliados'
import MinhaConta from '@/page/minha-conta/minha-conta'
import Loading from '@/page/loading/loading'
import { ProtectedRoute } from '@/components/ProtectedRoute.jsx'

function AppHeader() {
  const navigate = useNavigate()
  const { isSignedIn, isLoaded } = useUser()
  const { user, token } = useAuth()

  const hasClerkAuth = isLoaded && isSignedIn === true
  const hasCustomAuth = !!(user && token)
  const isAuthenticated = isLoaded && (hasClerkAuth || hasCustomAuth)

  return (
    <HeaderContainer>
      <HeaderInner>
        {/* Linha superior */}
        <HeaderTop>
          <HeaderLogoArea>
            <Link to="/loading" className="flex items-center gap-2 hover:opacity-90">
              <HeaderLogo>
                <HeaderLogoText>Mercado Black</HeaderLogoText>
              </HeaderLogo>
            </Link>
            <HeaderAddress>
              <HeaderAddressCep />
            </HeaderAddress>
          </HeaderLogoArea>

          <HeaderSearchBar disabled={!isAuthenticated} />

          <HeaderRight>
            <HeaderPromo>Ofertas a partir de R$ 20</HeaderPromo>
            <ThemeToggle />
            {!isAuthenticated ? (
              <Link to="/entrar" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Entre
              </Link>
            ) : hasClerkAuth ? (
              <UserButton afterSignOutUrl="/loading" />
            ) : (
              <UserMenu />
            )}
          </HeaderRight>
        </HeaderTop>

        {/* Linha inferior */}
        <HeaderNav>
          <HeaderNavLinks>
            {isAuthenticated ? (
              <>
                <Link to="/home" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/produtos" className="text-foreground hover:text-primary transition-colors">
                  Produtos
                </Link>
                <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
                <Link to="/cadastrar-produto" className="text-foreground hover:text-primary transition-colors">
                  Cadastrar Produto
                </Link>
                <Link to="/afiliados" className="text-foreground hover:text-primary transition-colors">
                  Afiliados
                </Link>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => navigate('/entrar', { state: { message: 'Faça login para acessar esta página' } })}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-0 cursor-pointer text-sm font-normal p-0"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/entrar', { state: { message: 'Faça login para acessar esta página' } })}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-0 cursor-pointer text-sm font-normal p-0"
                >
                  Produtos
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/entrar', { state: { message: 'Faça login para acessar esta página' } })}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-0 cursor-pointer text-sm font-normal p-0"
                >
                  Sobre
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/entrar', { state: { message: 'Faça login para acessar esta página' } })}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-0 cursor-pointer text-sm font-normal p-0"
                >
                  Cadastrar Produto
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/entrar', { state: { message: 'Faça login para acessar esta página' } })}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-0 cursor-pointer text-sm font-normal p-0"
                >
                  Afiliados
                </button>
              </>
            )}
          </HeaderNavLinks>
          <HeaderUserLinks>
            {!isAuthenticated ? (
              <>
                <Link to="/cadastrar" className="text-foreground hover:text-primary transition-colors">
                  Crie a sua conta
                </Link>
                <Link to="/entrar" className="text-foreground hover:text-primary transition-colors">
                  Entre
                </Link>
                <Link
                  to="/entrar"
                  className="text-foreground hover:text-primary transition-colors inline-flex p-0.5 rounded"
                  aria-label="Carrinho - faça login"
                >
                  <IconCart />
                </Link>
              </>
            ) : (
              <>
                <Link to="/produtos" className="text-foreground hover:text-primary transition-colors">
                  Compras
                </Link>
                <Link to="/carrinho" className="text-foreground hover:text-primary transition-colors relative" aria-label="Carrinho">
                  <IconCart />
                </Link>
              </>
            )}
          </HeaderUserLinks>
        </HeaderNav>
      </HeaderInner>
    </HeaderContainer>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppHeader />

      <main className="flex-1 min-h-0 overflow-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Navigate to="/loading" replace />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/produtos" element={<ProtectedRoute><Produtos /></ProtectedRoute>} />
          <Route path="/sobre" element={<ProtectedRoute><Sobre /></ProtectedRoute>} />
          <Route path="/carrinho" element={<ProtectedRoute><Carrinho /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/cadastrar-produto" element={<ProtectedRoute><CadastrarProduto /></ProtectedRoute>} />
          <Route path="/afiliados" element={<ProtectedRoute><Afiliados /></ProtectedRoute>} />
          <Route path="/minha-conta" element={<ProtectedRoute><MinhaConta /></ProtectedRoute>} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </main>

      <FooterContainer>
        <FooterInner>
          <FooterGrid>
            <div>
              <h3 className="font-bold text-foreground mb-4">Institucional</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre nós</Link></li>
                <li><Link to="/produtos" className="hover:text-primary transition-colors">Produtos</Link></li>
                <li><Link to="/cadastrar-produto" className="hover:text-primary transition-colors">Cadastrar produto</Link></li>
                <li><Link to="/afiliados" className="hover:text-primary transition-colors">Afiliados</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Trabalhe conosco</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Ajuda</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Central de ajuda</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Devoluções</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Rastrear pedido</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:contato@mercadoblack.com" className="hover:text-primary transition-colors">contato@mercadoblack.com</a></li>
                <li><span className="text-muted-foreground">Atendimento 24h</span></li>
              </ul>
            </div>
          </FooterGrid>
          <FooterBottom>© {new Date().getFullYear()} Mercado Black - Todos os direitos reservados</FooterBottom>
        </FooterInner>
      </FooterContainer>
    </div>
  )
}

export default App
