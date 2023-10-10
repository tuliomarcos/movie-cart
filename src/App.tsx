import { ThemeProvider } from 'components/ThemeProvider'
import { Router } from 'router'
import { CartContextProvider } from 'contexts/Cart'

function App() {
  return (
    <ThemeProvider>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
