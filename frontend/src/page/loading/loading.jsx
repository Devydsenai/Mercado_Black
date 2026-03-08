import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageWrapper, LoadingSpinner } from '@/components/styled.jsx'

function Loading() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login', { replace: true })
    }, 5000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <PageWrapper>
      <LoadingSpinner />
    </PageWrapper>
  )
}

export default Loading
