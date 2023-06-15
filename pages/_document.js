import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
          <Navbar/>
          <main className="container px-2 sm:px-4 md:px-8 lg:px-12 pt-16 mx-auto">
            <Main/>
            <NextScript />
          </main>
        </body>
      </Html>
    )
  }
}

export default MyDocument