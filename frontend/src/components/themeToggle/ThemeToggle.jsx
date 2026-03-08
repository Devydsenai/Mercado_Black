import { useTheme } from '@/contexts/useTheme'
import { ThemeToggleButton } from './styled'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeToggleButton onClick={toggleTheme}>
      {theme === 'dark' ? (
        <span className="text-2xl" aria-hidden>☀️</span>
      ) : (
        <span className="text-2xl" aria-hidden>🌙</span>
      )}
    </ThemeToggleButton>
  )
}
