import * as Styled from './Header.style'
import { CartIcon } from 'components/Icons'

interface HeaderProps {
	items: number
}

export function Header(props: HeaderProps) {
	return <Styled.Container>
		<h2>WeMovies</h2>
		<Styled.CartInfo>
			<span>Meu Carrinho</span>
			<span>{ props.items } Itens</span>
			<CartIcon/>
		</Styled.CartInfo>
	</Styled.Container>
}