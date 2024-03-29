import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '../styles/globals.css'
import LoadingPage from '../components/LoadingPage'

function App({ Component, pageProps }) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleChangeStart = (url) => {
      if (!url) return
      if (url.includes('/blog') || url.includes('/projects') || url.includes('/latestblog')){
        setIsLoading(true)
      }
    }

    const handleChangeEnd= (url) => {
      if (!url) return
      if (url.includes('/blog') || url.includes('/projects') || url.includes('/latestblog')){
        setIsLoading(false)
      }
    }

    router.events.on("routeChangeStart", handleChangeStart)
    router.events.on("routeChangeComplete", handleChangeEnd)
    router.events.on("routeChangeError", handleChangeEnd)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeProvider>
      {isLoading ? 
        (<LoadingPage />) 
        : (<Component {...pageProps} />)}
        <SpeedInsights />
    </ThemeProvider>
  )
}

export default App
