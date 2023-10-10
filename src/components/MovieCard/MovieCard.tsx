import * as Styled from './MovieCard.style'
import { ShoppingCart } from 'components/Icons'
interface CardProps {
  id: string
  image: string
  title: string
  price: number
  quantity: number
  onAddToCart: () => void
}

export function MovieCard(props: CardProps) {
  const isSelectedItem = props.quantity > 0

  return (
    <Styled.Container>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <span>R$ {props.price}</span>
      <button onClick={props.onAddToCart}>
        <ShoppingCart/>
        {props.quantity}
        <span>{isSelectedItem ? 'Item adicionando' : 'Adicionar ao carrinho'}</span>
      </button>
    </Styled.Container>
  )
}
