import * as Styled from 'components/ThemeProvider/ThemeProvider.style'
import { SuccessIcon } from "components/Icons/Success"
import { useNavigate } from 'react-router-dom'

export function Success() {
  const navigate = useNavigate()
  
  return <Styled.SuccessAndReloadPage>
    <p>Compra realizada com sucesso!</p>
    <SuccessIcon></SuccessIcon>
    <button onClick={() => navigate('/')}>Voltar</button>
  </Styled.SuccessAndReloadPage>
}