  
import '../styles/index.css'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined } defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App