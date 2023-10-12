// import { type } from 'os'
import styled from 'styled-components'

  type BotaoProps = {
    principal: boolean
  }

  const Botão = styled.button <BotaoProps>`
    background-color: ${(props) => (props.principal ? 'red' : 'green')};
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  `



  const Teste = () => {
    return (
      <>
      <Botão principal>Teste</Botão>
      <Botão principal={false}>Teste</Botão>
      </>
    )
  }

  export default Teste
