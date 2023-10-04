import * as Styled from './Header.style'
import { CartIcon } from 'components/Icons'

interface HeaderProps {
	items: number
}

export function Header(props: HeaderProps) {
	return <Styled.Container>
		<h2>WeMovies</h2>
		<Styled.CartInfo>
			<div>
				<p>Meu Carrinho</p>
				<p>{ props.items } Itens</p>
			</div>
			<CartIcon/>
		</Styled.CartInfo>
	</Styled.Container>
}