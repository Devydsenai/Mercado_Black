/**
 * ThemeToggle - alterna tema claro/escuro (Tailwind darkMode: 'class')
 */
export function ThemeToggleButton({ className = '', ...props }) {
  return (
    <button
      type="button"
      aria-label="Alternar tema"
      className={`p-2 rounded-md hover:bg-accent transition-colors ${className}`.trim()}
      {...props}
    />
  )
}
