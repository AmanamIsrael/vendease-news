import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import NewsProvider from '../context'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallback'


// creating a context provider for holding app data
export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <NewsProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={router.reload}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </NewsProvider>
  )
}
