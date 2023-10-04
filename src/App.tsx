import { useState } from 'react'
import { Header } from 'components/Header'
import { MovieCatalog } from 'components/MovieCatalog'
import { ThemeProvider } from 'components/ThemeProvider'
import { LoadSpinner } from 'components/Spinner'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ThemeProvider>
      <Header items={count}></Header>
      <main>
        { isLoading && <LoadSpinner /> }
        { !isLoading && <MovieCatalog /> }
      </main>
    </ThemeProvider>
  )
}

export default App
