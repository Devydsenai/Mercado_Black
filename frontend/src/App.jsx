import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { HeaderContainer, HeaderInner, HeaderLogo, HeaderNav } from '@/components/header/styled'
import { ThemeToggle } from '@/components/themeToggle/ThemeToggle'
import { UserMenu } from '@/components/userMenu/UserMenu'
import { FooterContainer, FooterInner, FooterBottom } from '@/components/footer/styled'
import Home from '@/page/Home/home'
import Login from '@/page/login/login'
import Cadastro from '@/page/cadastro/cadastro'
import Produtos from '@/page/produtos/produtos'
import Sobre from '@/page/sobre/sobre' 

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeaderContainer>
        <HeaderInner>
          <HeaderLogo>
            <Link to="/home" className="hover:opacity-90">Mercado Black</Link>
          </HeaderLogo>
          <HeaderNav>
            <Link to="/home" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/produtos" className="hover:text-primary transition-colors">Produtos</Link>
            <Link to="/sobre" className="hover:text-primary transition-colors">Sobre</Link>
            <UserMenu />
            <ThemeToggle />
          </HeaderNav>
        </HeaderInner>
      </HeaderContainer>

      <main className="flex-1 min-h-0 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="sobre" element={<Sobre />} />
        </Routes>
      </main>

      <FooterContainer>
        <FooterInner>
          <FooterBottom>© Mercado Black - Todos os direitos reservados</FooterBottom>
          
        </FooterInner>
      </FooterContainer>
    </div>
  )
}

export default App
