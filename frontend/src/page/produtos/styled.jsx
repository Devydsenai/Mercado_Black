/**
 * Produtos - design system Tailwind
 */

// import styled from 'styled-components'

// export const ProdutosGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1rem;
//   max-width: 100%;
//   padding: 1rem;
// `

// export const ProdutosTitle = styled.h1`
//   font-size: 2rem;
//   font-weight: 600;
//   color: #000;
//   margin-bottom: 1rem;
// `

// export const ProdutosDescription = styled.p`
//   font-size: 1.2rem;
//   color: #000;
//   margin-bottom: 1rem;
// `


export function ProdutosGrid({ children, className = '', ...props }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function ProdutosTitle({ children, className = '', ...props }) {
  return (
    <h1 className={`text-2xl font-bold text-foreground mb-6 ${className}`.trim()} {...props}>
      {children}
    </h1>
  )
}