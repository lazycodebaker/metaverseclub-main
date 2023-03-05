
import WalletContextProvider from '@/context/WalletConnect';
import '@/styles/globals.css';
import { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  </>
  )
};