import { SKILLS } from "./skills";

import {
  Container,
  Inner,
  SectionHeader,
  CategoryGroup,
  CategoryTitle,
  SkillsGrid,
  SkillTag,
} from "./styles";

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
