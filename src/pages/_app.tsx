import { AppProps } from 'next/app'
import { FirestoreProvider } from '../hooks/useFirestore'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirestoreProvider>
      <Component {...pageProps} />
    </FirestoreProvider>
  )
}

export default MyApp
