import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import NewsProvider from '../context'

// creating a context provider for holding app data

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NewsProvider>
      <Component {...pageProps} />
    </NewsProvider>
  )
}
