import Card from "@/components/ui/Card";

import { PROJECTS } from "./projects";

import { Cards, Container, Inner } from "./styles";

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
