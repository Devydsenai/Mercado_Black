import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '@/components/avatar'
import { useAuth } from '@/contexts/useAuth.js'

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?'
  return name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function getAvatarUrl(user) {
  if (!user) return null
  const name = (user.nome || '').trim() || 'U'
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=80`
}

export function UserMenu() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  if (!user) return null

  const handleLogout = () => {
    logout()
    setOpen(false)
    navigate('/loading')
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 p-0.5 rounded-full hover:ring-2 hover:ring-primary/30 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Menu do usuário"
      >
        <Avatar
          src={getAvatarUrl(user)}
          initials={getInitials(user.nome)}
          size="sm"
          className="ring-1 ring-border"
        />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-2 py-2 w-56 bg-card border border-border rounded-xl shadow-xl z-50"
          role="menu"
        >
          <div className="px-4 py-3 border-b border-border flex items-center gap-3">
            <Avatar
              src={getAvatarUrl(user)}
              initials={getInitials(user.nome)}
              size="md"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{user.nome}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              <span className="inline-flex items-center gap-1 mt-1 text-xs text-green-600 dark:text-green-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Usuário ativo
              </span>
            </div>
          </div>
          <Link
            to="/minha-conta"
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Configurações da conta
          </Link>
          <Link
            to="/home"
            className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Minha conta
          </Link>
          <Link
            to="/produtos"
            className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Produtos
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2.5 text-sm text-destructive hover:bg-accent font-medium"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}
