import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <GoogleOAuthProvider clientId="227564136748-9t9ao6jgcit2b62mj3cf7nv2pb4dtcki.apps.googleusercontent.com">
  <Component {...pageProps}/>
  </GoogleOAuthProvider>
  </>

)}
