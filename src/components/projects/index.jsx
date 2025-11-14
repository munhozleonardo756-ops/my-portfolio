import Card from "../card";
import { Cards, Container, Inner } from "./styles";

import Bladoom from "@/assets/bladoom.webp";
import EstoqueImovel from "@/assets/estoque-imovel.webp";
import ESP from "@/assets/esp.webp";

const PROJECTS = [
  {
    image: Bladoom,
    name: "Bladoom",
    description:
      "Bladoom é uma plataforma de negociação imobiliária construída em React com styled-components.",
    skills: [
      "React",
      "Supabase",
      "RLS",
      "Styled-components",
      "Postgres",
      "Context API",
      "i18n",
      "WebSocket",
    ],
    link: "https://bladoom.io",
  },
  {
    image: EstoqueImovel,
    name: "Estoque Imóvel",
    description:
      "Plataforma focada em estoque de imóveis construída em React com styled-components.",
    skills: [
      "React",
      "Styled-components",
      "SEO",
      "Axios",
      "REST API",
      "React query",
      "SEO",
    ],
    link: "https://estoqueimovel.com.br",
  },
  {
    image: ESP,
    name: "Evolution Soccer Program",
    description:
      "Site de formação de crianças e adolescentes por meio do futebol, é uma SPA construída em React com styled-components.",
    skills: ["React", "Styled-components", "PHP", "SEO"],
    link: "https://esoccerprogram.com",
  },
];

const Projects = () => {
  return (
    <Container id="projects">
      <Inner>
        <h1>Meus Projetos</h1>
        <p>
          Veja alguns dos meus principais projetos de desenvolvimento de
          front-end.
        </p>

        <Cards>
          {PROJECTS.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              description={project.description}
              projectName={project.name}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </Cards>
      </Inner>
    </Container>
  );
};

export default Projects;
