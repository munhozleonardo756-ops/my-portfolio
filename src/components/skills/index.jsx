import {
  Container,
  Inner,
  SectionHeader,
  CategoryGroup,
  CategoryTitle,
  SkillsGrid,
  SkillTag,
} from "./styles";

const SKILLS = {
  "Front-end": [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "React Native",
    "Styled-components",
    "SEO",
    "Acessibilidade",
    "WebSocket",
    "i18n",
    "Desenvolvimento de jogos web",
  ],
  "Back-end & APIs": ["PHP", "Laravel", "REST API"],
  "Banco de dados & BaaS": ["MySQL", "Postgres", "Supabase", "Firebase"],
  Ferramentas: ["GitHub"],
};

const SkillsSection = () => {
  return (
    <Container id="skills">
      <Inner>
        <SectionHeader>
          <h2>Skills</h2>
          <p>
            Tecnologias e ferramentas que utilizo no dia a dia para criar
            aplicações web e mobile modernas.
          </p>
        </SectionHeader>

        {Object.entries(SKILLS).map(([category, skills]) => (
          <CategoryGroup key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsGrid>
              {skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillsGrid>
          </CategoryGroup>
        ))}
      </Inner>
    </Container>
  );
};

export default SkillsSection;
