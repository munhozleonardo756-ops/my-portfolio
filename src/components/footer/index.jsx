import { Container, Line } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Line>
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </Line>
      <Line>Desenvolvido por Leonardo Munhoz</Line>
    </Container>
  );
};

export default Footer;
