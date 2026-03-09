import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { HeaderSearch } from './styled'
import { IconSearch } from '@/components/icons/Icons.jsx'

function HeaderSearchBar({ disabled }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const qFromUrl = searchParams.get('q') || ''
  const [value, setValue] = useState(qFromUrl)

  useEffect(() => {
    setValue(qFromUrl)
  }, [qFromUrl, location.pathname])

  const handleSubmit = (e) => {
    e.preventDefault()
    const term = value.trim()
    if (disabled || !term) return
    navigate(`/produtos?q=${encodeURIComponent(term)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 min-w-0 max-w-2xl" role="search">
      <HeaderSearch
        iconClickable
        icon={
          <button
            type="submit"
            disabled={disabled}
            className="cursor-pointer hover:text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-60 p-0 border-0 bg-transparent"
            aria-label="Buscar"
          >
            <IconSearch />
          </button>
        }
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={disabled ? 'Pesquisar (faça login)' : 'Buscar produtos, marcas e muito mais...'}
      />
    </form>
  )
}

export default HeaderSearchBar
