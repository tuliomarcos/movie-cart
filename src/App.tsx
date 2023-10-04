import { useState } from 'react'
import { Header } from 'components/Header'
import { MovieCatalog } from 'components/MovieCatalog'
import { ThemeProvider } from 'components/ThemeProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Header items={count}></Header>
      <main>
        <MovieCatalog></MovieCatalog>
      </main>
    </ThemeProvider>
  )
}

export default App
