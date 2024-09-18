import { useState, useEffect } from 'react'

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const resizeEvent = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    resizeEvent()

    window.addEventListener('resize', resizeEvent)

    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [])

  return isMobile
}
