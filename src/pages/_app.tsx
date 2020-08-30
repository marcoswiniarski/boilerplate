import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
)

export default App
