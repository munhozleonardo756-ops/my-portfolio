import { EMPLOYMENT } from "./employment";

import {
  Container,
  SectionHeader,
  Timeline,
  Employment,
  Occupation,
  Period,
  Description,
} from "./styles";

const EmploymentHistory = () => {
  return (
    <Container id="employment">
      <SectionHeader>
        <h2>Experiências profissionais</h2>
        <p>Um resumo das principais funções e projetos</p>
      </SectionHeader>

      <Timeline>
        {EMPLOYMENT.map((occupation) => (
          <Employment key={occupation.name}>
            <Occupation>{occupation.name}</Occupation>
            <Period>{occupation.period}</Period>
            <Description>{occupation.description}</Description>
          </Employment>
        ))}
      </Timeline>
    </Container>
  );
};

export default EmploymentHistory;
