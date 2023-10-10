import * as Styled from 'components/ThemeProvider/ThemeProvider.style'
import { SuccessIcon } from "components/Icons/Success"
import { useNavigate } from 'react-router-dom'
import { useCart } from 'hooks/useCart'

export function Success() {
  const navigate = useNavigate()
  const { resetCart } = useCart()
  return <Styled.SuccessAndReloadPage>
    <p>Compra realizada com sucesso!</p>
    <SuccessIcon></SuccessIcon>
    <button onClick={() => {
      navigate('/')
      resetCart()
    }}>Voltar</button>
  </Styled.SuccessAndReloadPage>
}