import {
  Container,
  Inner,
  SectionHeader,
  EducationCard,
  DegreeTag,
  Course,
  Institution,
  Period,
} from "./styles";

const AcademicDegree = () => {
  return (
    <Container id="education">
      <Inner>
        <SectionHeader>
          <h2>Formação acadêmica</h2>
          <p>
            Minha base acadêmica em tecnologia da informação e desenvolvimento
            de sistemas.
          </p>
        </SectionHeader>

        <EducationCard>
          <DegreeTag>Graduação</DegreeTag>
          <Course>Análise e Desenvolvimento de Sistemas</Course>
          <Institution>Universidade Cruzeiro do Sul</Institution>
          <Period>08/2021 — 08/2023</Period>
        </EducationCard>
      </Inner>
    </Container>
  );
};

export default AcademicDegree;
