import '../styles/globals.css'
import '../styles/styles.css'
import { ThemeProvider } from "next-themes";
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider forcedTheme={Component.theme || undefined} defaultTheme="system" enableSystem={true}  attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
