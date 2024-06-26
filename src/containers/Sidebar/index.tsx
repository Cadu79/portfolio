import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void;
}

/* eslint-disable jsx-a11y/alt-text */
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Carlos Eduardo</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>Cadu79</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheiro front-end</Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
