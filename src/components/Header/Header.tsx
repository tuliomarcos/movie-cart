import * as Styled from './Header.style'
import { CartIcon } from 'components/Icons'
import { useCart } from 'hooks/useCart'
import { useNavigate } from 'react-router-dom'

export function Header() {
	const { quantityOfItemSelected } = useCart()
	const navigate = useNavigate()
	return <Styled.Container>
		<h2>WeMovies</h2>
		<Styled.CartInfo>
			<div>
				<p>Meu Carrinho</p>
				<p>{ quantityOfItemSelected } Itens</p>
			</div>
			<CartIcon onClick={() => navigate('/cart')}/>
		</Styled.CartInfo>
	</Styled.Container>
}