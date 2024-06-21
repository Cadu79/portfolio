/* eslint-disable jsx-a11y/alt-text */
import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
    Carlos Eduardo da Silva, um dedicado professor de Matemática, está trilhando um novo caminho ao migrar para a área de tecnologia, focando tanto no desenvolvimento back end quanto no front end. Com uma sólida base analítica e uma paixão por resolver problemas, traz uma abordagem lógica e estruturada ao mundo do desenvolvimento de software. Sua transição para a tecnologia reflete um desejo contínuo de aprender e inovar, utilizando suas habilidades matemáticas para enfrentar novos desafios e contribuir significativamente para projetos de desenvolvimento web e de sistemas complexos.
    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=Cadu79&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Cadu79&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
