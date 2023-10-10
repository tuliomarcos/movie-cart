import { SuccessIcon } from "components/Icons/Success"
import * as Styled from './Success.style'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const navigate = useNavigate()
  
  return <Styled.Container>
    <p>Compra realizada com sucesso!</p>
    <SuccessIcon></SuccessIcon>
    <button onClick={() => navigate('/')}>Voltar</button>
  </Styled.Container>
}