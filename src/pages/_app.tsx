import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import AuthProvider from "@/components/providers/AuthProvider";
import {TypeComponentAuthFields} from "@/interfaces/page.interface";


type TypeApp = AppProps & TypeComponentAuthFields
export default function App({ Component, pageProps }: TypeApp) {
  return (
      <AuthProvider Component={Component}>
        <Component {...pageProps} />
      </AuthProvider>
  )
}

