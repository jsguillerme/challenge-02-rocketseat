import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { RouterApp } from './router/Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterApp />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
