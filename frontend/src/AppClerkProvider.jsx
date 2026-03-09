import { ClerkProvider } from '@clerk/react'
import { ptBR } from '@clerk/localizations'
import { useLocale } from './contexts/LocaleContext'

export function AppClerkProvider({ children, publishableKey }) {
  const { locale } = useLocale()
  const localization = locale === 'pt' ? ptBR : undefined

  return (
    <ClerkProvider publishableKey={publishableKey} localization={localization}>
      {children}
    </ClerkProvider>
  )
}
