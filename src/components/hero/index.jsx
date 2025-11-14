import {
  Container,
  Inner,
  Label,
  MainTitle,
  Subtitle,
  Actions,
  PrimaryButton,
  SecondaryButton,
  Highlights,
  HighlightItem,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <Inner>
        <Label>Desenvolvedor Front-end</Label>

        <MainTitle>
          Crio interfaces modernas, rápidas e bem estruturadas.
        </MainTitle>

        <Subtitle>
          Focado em React, performance e experiências responsivas. Ajudo a
          transformar ideias em produtos digitais prontos para produção.
        </Subtitle>

        <Actions>
          <PrimaryButton href="#projects">Ver projetos</PrimaryButton>
          <SecondaryButton href="#contact">Entrar em contato</SecondaryButton>
        </Actions>

        <Highlights>
          <HighlightItem>+3 anos de experiência</HighlightItem>
          <HighlightItem>Remote friendly</HighlightItem>
          <HighlightItem>Disponível para novos projetos</HighlightItem>
        </Highlights>
      </Inner>
    </Container>
  );
};

export default Hero;
