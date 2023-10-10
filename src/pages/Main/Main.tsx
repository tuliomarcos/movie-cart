import * as Styled from './Main.style'
import { useEffect, useState } from 'react'
import { useCart } from 'hooks/useCart'
import { MovieCard } from 'components/MovieCard'
import { Spinner } from 'components/Spinner'
import { MovieService, GetMoviesResponse } from 'services/movies'


export function Main() {
  const [data, setData] = useState<GetMoviesResponse[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const { cart, handleAddToCart } = useCart()
  const priceDefault = 29.99

  const movieService = MovieService()

  useEffect(() => {
    setIsLoading(true)

    movieService
      .getMovies()
      .then((response) => setData(response))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Styled.Container>
      {isLoading && <Spinner />}
      {!isLoading &&
        data &&
        data.map((item) => (
          <MovieCard
            id={item.id}
            key={item.id}
            image={item.imageUrl}
            title={item.title}
            price={priceDefault}
            quantity={
              cart.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0
            }
            onAddToCart={() =>
              handleAddToCart({
                id: item.id,
                image: item.imageUrl,
                price: priceDefault,
                title: item.title
              })
            }
          />
        ))}
    </Styled.Container>
  )
}
