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

export function Avatar({ src, initials, square = false, className = '', size = 'md', ...props }) {
  const sizeClass = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  }[size] || 'w-10 h-10 text-sm'
  const rounded = square ? 'rounded' : 'rounded-full'

  if (src) {
    return (
      <img
        src={src}
        alt=""
        className={`${sizeClass} ${rounded} object-cover flex-shrink-0 ${className}`.trim()}
        {...props}
      />
    )
  }

  const text = initials || '?'
  return (
    <span
      className={`${sizeClass} ${rounded} flex items-center justify-center font-semibold bg-primary/20 text-primary flex-shrink-0 ${className}`.trim()}
      {...props}
    >
      {text}
    </span>
  )
}
