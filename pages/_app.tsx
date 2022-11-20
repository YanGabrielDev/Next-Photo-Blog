import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../src/styles/globalStyles"
import { theme } from "../src/styles/theme/theme"
import { Layout } from "../src/components/Layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
