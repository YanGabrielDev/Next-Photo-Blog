import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { Menu } from "../src/components/Menu"
import { GlobalStyles } from "../src/styles/globalStyles"
import { theme } from "../src/styles/theme/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Menu/>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
