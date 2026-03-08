import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

export function UserMenu() {
  const { user, logout } = useAuth()
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

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-accent transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Avatar initials={getInitials(user.nome)} size="sm" />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-2 py-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50"
          role="menu"
        >
          <div className="px-4 py-2 border-b border-border">
            <p className="text-sm font-medium text-foreground truncate">{user.nome}</p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
          <Link
            to="/home"
            className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Minha conta
          </Link>
          <Link
            to="/produtos"
            className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
            onClick={() => setOpen(false)}
          >
            Produtos
          </Link>
          <button
            type="button"
            onClick={() => {
              logout()
              setOpen(false)
            }}
            className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-accent"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}
