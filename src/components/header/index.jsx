import { Container, Brand, Item, List, Navigation } from "./styles";

const Header = () => {
  return (
    <Container>
      <Brand href="#">Leonardo Munhoz</Brand>

      <Navigation aria-label="Navegação principal">
        <List>
          <Item>
            <a href="#contact">Contato</a>
          </Item>
          <Item>
            <a href="#skills">Skills</a>
          </Item>
          <Item>
            <a href="#projects">Projetos</a>
          </Item>
        </List>
      </Navigation>
    </Container>
  );
};

export default Header;
