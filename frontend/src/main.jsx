import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from './contexts/LocaleContext.jsx'
import { AppClerkProvider } from './AppClerkProvider.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { AuthProvider } from './contexts/AuthProvider.jsx'
import { AddressProvider } from './contexts/AddressContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { ProductsProvider } from './contexts/ProductsContext.jsx'
import './index.css'
import App from './App.jsx'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleProvider>
      <AppClerkProvider publishableKey={clerkPubKey}>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <AddressProvider>
              <CartProvider>
                <ProductsProvider>
                  <App />
                </ProductsProvider>
              </CartProvider>
            </AddressProvider>
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
      </AppClerkProvider>
    </LocaleProvider>
  </StrictMode>,
)
