import { useState, useRef, useEffect } from 'react'
import { useUser } from '@clerk/react'
import { useAuth } from '@/contexts/useAuth.js'
import { useAddress } from '@/contexts/AddressContext.jsx'
import { IconLocation } from '@/components/icons/Icons.jsx'

export function HeaderAddressCep() {
  const [open, setOpen] = useState(false)
  const [cepInput, setCepInput] = useState('')
  const containerRef = useRef(null)
  const { isSignedIn, isLoaded } = useUser()
  const { user, token } = useAuth()
  const { address, buscarPorCep, salvar, loading, error, enderecoFormatado } = useAddress()

  const isAuthenticated = isLoaded && (isSignedIn === true || !!(user && token))

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  const handleCepBlur = async () => {
    if (!cepInput.trim()) return
    try {
      await buscarPorCep(cepInput)
      if (isAuthenticated) salvar(true)
    } catch {}
  }

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    setCepInput(value)
  }

  const handleSalvar = () => {
    if (isAuthenticated) salvar(true)
    setOpen(false)
  }

  const displayText = enderecoFormatado || 'Enviar para Cidade 00000-000'

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer bg-transparent border-0 p-0"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <IconLocation />
        {displayText}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 p-4 rounded-lg border border-border bg-background shadow-lg z-50 min-w-[280px]"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-sm font-semibold text-foreground mb-3">Informe seu CEP</h3>

          <input
            type="text"
            placeholder="Digite o CEP (00000-000)"
            value={cepInput || address.cep}
            onChange={handleCepChange}
            onBlur={handleCepBlur}
            maxLength={9}
            className="w-full h-9 px-3 rounded border border-border bg-background text-foreground text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-primary"
          />

          {loading && <p className="text-xs text-muted-foreground mb-2">Buscando...</p>}
          {error && <p className="text-xs text-destructive mb-2">{error}</p>}

          {(address.cidade || address.rua) && (
            <div className="text-xs text-muted-foreground mb-3 space-y-0.5">
              {address.rua && <p>{address.rua}</p>}
              {(address.bairro || address.cidade) && (
                <p>
                  {[address.bairro, address.cidade, address.estado].filter(Boolean).join(' - ')}
                </p>
              )}
            </div>
          )}

          {isAuthenticated && (address.cidade || address.cep) && (
            <button
              type="button"
              onClick={handleSalvar}
              className="w-full py-2 rounded bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Salvar endereço
            </button>
          )}

          {!isAuthenticated && (address.cidade || address.cep) && (
            <p className="text-xs text-muted-foreground">
              Faça login para salvar seu endereço
            </p>
          )}
        </div>
      )}
    </div>
  )
}
