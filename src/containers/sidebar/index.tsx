import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import Avatar from '../../components/Avatar'

import { Descricao, BotaoTema, SidebarContainer } from './style'

type Props = {
  trocaTema?: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Pablo Troli</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        DevTroli
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro de Software front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
