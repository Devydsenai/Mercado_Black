import { Link } from 'react-router-dom'
import { Avatar } from '@/components/avatar'
import { useAuth } from '@/contexts/useAuth.js'

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?'
  return name.trim().split(/\s+/).map((p) => p[0]).join('').toUpperCase().slice(0, 2)
}

function getAvatarUrl(user) {
  if (!user) return null
  const name = (user.nome || '').trim() || 'U'
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=120`
}

function MinhaConta() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">Faça login para acessar.</p>
      </div>
    )
  }

  return (
    <div className="min-h-[60vh] max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/home" className="text-sm text-primary hover:underline font-medium">
          ← Voltar
        </Link>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="p-6 flex flex-col sm:flex-row items-center gap-6 border-b border-border bg-muted/20">
          <Avatar
            src={getAvatarUrl(user)}
            initials={getInitials(user.nome)}
            size="lg"
            className="ring-2 ring-primary/30"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold text-foreground">{user.nome}</h1>
            <p className="text-muted-foreground">{user.email}</p>
            <span className="inline-flex items-center gap-1.5 mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Usuário ativo
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="font-semibold text-foreground">Configurações da conta</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">Nome</span>
              <span className="font-medium text-foreground">{user.nome}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">E-mail</span>
              <span className="font-medium text-foreground">{user.email}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground pt-2">
            Para alterar dados de cadastro, entre em contato com o suporte.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MinhaConta
