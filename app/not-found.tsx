'use client'

import { useTheme } from 'next-themes'

export default function NotFound() {
  const { theme } = useTheme()

  return (
    <main className="flex flex-col flex-grow items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        This page could not be found
      </p>
      <img width={300} src={'https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto,w_300/guntxjakka.me/404_fdi8fx.jpg'} alt="A cat with a loading spinner icon on its forehead, appearing as if it is buffering or deep in thought." />
    </main>
  )
}
