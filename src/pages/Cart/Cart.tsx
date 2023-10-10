import * as Styled from './Cart.style'
import { LessIcon } from 'components/Icons/Less'
import { PlusIcon } from 'components/Icons/Plus'
import { TrashIcon } from 'components/Icons/Trash'
import { useCart } from 'hooks/useCart'
import { useNavigate } from 'react-router-dom'

export function Cart() {
  const { cart, totalPrice, handleQuantity } = useCart()
  const navigate = useNavigate()

  return <Styled.Container>
    <Styled.HeaderList>
      <p>produto</p>
      <p>qtd</p>
      <p>subtotal</p>
    </Styled.HeaderList>
    {cart.map((item) => (
      <Styled.ItemList key={item.id}>
        <img src={item.image} alt={item.title} />
        <div>
          <span className="title">{item.title}</span>
          <span className="price">R$ {item.price}</span>
        </div>
        <div className="quantify">
          <LessIcon onClick={() => handleQuantity('decrease', item.id)} />
          <input
            type="number"
            min="0"
            value={cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
            onChange={() => {}}
          />  
          <PlusIcon onClick={() => handleQuantity('increase', item.id)} />  
        </div>
        <span className="price">R$ {(item.price * item.quantity).toFixed(2)}</span>
        <TrashIcon />
      </Styled.ItemList>
    ))}
    <Styled.FooterList>
      <button onClick={() => navigate('/success')}>Finalizar pedido</button>
      <div>
        <span className="total">Total</span>
        <span className="price">R$ {totalPrice.toFixed(2)}</span>
      </div>
    </Styled.FooterList>
  </Styled.Container>
}