import '../styles/globals.css'
import '../styles/styles.css'
import { ThemeProvider } from "next-themes";
import store from '../store'
import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider forcedTheme={Component.theme || undefined} defaultTheme="white" enableSystem={false}  attribute="class">
        <Navbar/>
        <main className="container px-2 sm:px-4 md:px-8 lg:px-12 pt-16 mx-auto">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
