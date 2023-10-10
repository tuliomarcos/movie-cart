import * as Styled from 'components/ThemeProvider/ThemeProvider.style'
import { ReloadIcon } from "components/Icons/Reload"
import { useNavigate } from 'react-router-dom'

export function Reload() {
  const navigate = useNavigate()
  
  return <Styled.SuccessAndReloadPage>
    <p>Parece que não há nada por aqui :(</p>
    <ReloadIcon></ReloadIcon>
    <button onClick={() => navigate('/')}>Voltar</button>
  </Styled.SuccessAndReloadPage>
}