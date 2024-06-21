import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

/* eslint-disable jsx-a11y/alt-text */
const Sidebar = () => (
  <aside>
    <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Carlos Eduardo</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>Cadu79</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheiro front-end</Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
