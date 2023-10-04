import { useState, useMemo } from 'react'
import { Header } from 'components/Header'
import { MovieCard } from 'components/MovieCard'
import { ThemeProvider } from 'components/ThemeProvider'
import { Spinner } from 'components/Spinner'


const dataMock = [
  {
    id: "1",
    image: "filme1.jpg",
    title: "Matrix",
    price: 12.99,
  },
  {
    id: "2",
    image: "filme2.jpg",
    title: "Star Wars: Episódio IV - Uma Nova Esperança",
    price: 14.99,
  },
  {
    id: "3",
    image: "filme3.jpg",
    title: "Pulp Fiction",
    price: 9.99,
  },
  {
    id: "4",
    image: "filme4.jpg",
    title: "O Senhor dos Anéis: A Sociedade do Anel",
    price: 15.99,
  }
]

interface Cart {
  id: string
  image: string
  title: string
  price: number
  quantity: number
}

function App() {
  const [cart, setCart] = useState<Cart[]>([])
  const [isLoading] = useState(false)
  
  const quantityOfItemSelected = useMemo(() => cart.length, [cart]) 

  function handleAddToCart(movieId: string) {
    setCart((prev) => {
      const itemExist = prev.find(item => item.id === movieId)
      const item = dataMock.find(item => item.id === movieId)
      if(!itemExist) prev.push({...item!, quantity: 1})
      return [...prev]
    })
  }

  return (
    <ThemeProvider>
      <Header items={quantityOfItemSelected}></Header>
      <main>
        { isLoading && <Spinner /> }
        { !isLoading && dataMock.map((item) => (
          <MovieCard 
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={cart.find(cartItem => cartItem.id === item.id)?.quantity ?? 0}
            onAddToCart={() => handleAddToCart(item.id)}
          /> 
        ))}
      </main>
    </ThemeProvider>
  )
}

export default App
