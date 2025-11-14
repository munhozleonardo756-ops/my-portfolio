import {
  Container,
  SectionHeader,
  Timeline,
  Employment,
  Occupation,
  Period,
  Description,
} from "./styles";

const EMPLOYMENT = [
  {
    name: "Desenvolvedor Full Stack - YPB Marketing Digital",
    period: "08/2023 - Atual",
    description:
      "Desenvolvimento front-end com React e React Native, manutenção de backend em PHP Laravel com MySQL e gerenciamento de servidores em AWS e HostGator.",
  },
  {
    name: "Técnico de Informática N1 - Penso Tecnologia",
    period: "04/2022 - 04/2023",
    description:
      "Prestei serviços de tecnologia realizando configuração, instalação e manutenção de software e hardware. Ofereci suporte de nível 1 aos colaboradores e produzi documentações e topologias de rede.",
  },
  {
    name: "Auxiliar de T.I - Distribuidora Safari",
    period: "2019 — 2021",
    description:
      "Realizei manutenção de computadores, suporte via helpdesk, configuração de redes e impressoras, atendimento ao usuário, formatação de máquinas e configuração de PABX e cabeamento.",
  },
];

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
