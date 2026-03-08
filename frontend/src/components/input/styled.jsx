/**
 * Input - design system Tailwind
 */
const baseClasses = 'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

export function InputBase({ className = '', ...props }) {
  return <input className={`${baseClasses} ${className}`.trim()} {...props} />
}

export function InputWrapper({ children, className = '', ...props }) {
  return (
    <div className={`space-y-2 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function InputLabel({ children, className = '', ...props }) {
  return (
    <label className={`text-sm font-medium text-foreground ${className}`.trim()} {...props}>
      {children}
    </label>
  )
}
