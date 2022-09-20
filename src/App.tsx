import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./assets/styles/global"
import { defaultTheme } from "./assets/styles/themes/default"
import { Construction } from "./pages/Construction"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Construction />
    <GlobalStyle />
  </ThemeProvider>
  )
}

