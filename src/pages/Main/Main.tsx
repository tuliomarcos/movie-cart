import * as Styled from './Main.style'
import { useState } from "react"
import { useCart } from "hooks/useCart"
import { MovieCard } from "components/MovieCard"
import { Spinner } from "components/Spinner"

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

export function Main() {
  const [isLoading] = useState(false)
  const {cart, handleAddToCart} = useCart()

  return <Styled.Container>
    { isLoading && <Spinner /> }
    { !isLoading && dataMock.map((item) => (
      <MovieCard
        id={item.id}
        key={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        quantity={cart.find(cartItem => cartItem.id === item.id)?.quantity ?? 0}
        onAddToCart={() => handleAddToCart({
          id: item.id,
          image: item.image,
          price: item.price,
          title: item.title,
        })}
      /> 
    ))}
  </Styled.Container>
}