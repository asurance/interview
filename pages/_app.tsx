import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

import '../global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Asurance的面试工具箱</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
