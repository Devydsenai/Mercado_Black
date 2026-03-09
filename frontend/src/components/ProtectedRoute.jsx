import { useEffect } from 'react'
import { useUser } from '@clerk/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/useAuth.js'

export function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { isSignedIn, isLoaded } = useUser()
  const { user, token } = useAuth()

  const hasClerkAuth = isLoaded && isSignedIn === true
  const hasCustomAuth = !!(user && token)
  const isAuthenticated = hasClerkAuth || hasCustomAuth

  useEffect(() => {
    if (isLoaded && !isAuthenticated) {
      navigate('/entrar', { replace: true, state: { from: location.pathname, message: 'Faça login para acessar esta página' } })
    }
  }, [isLoaded, isAuthenticated, navigate, location.pathname])

  if (!isLoaded) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  return children
}
