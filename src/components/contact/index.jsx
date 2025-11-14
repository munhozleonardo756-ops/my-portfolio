import {
  Container,
  Inner,
  SectionHeader,
  LinksNav,
  LinksList,
  LinkItem,
} from "./styles";

const Contact = () => {
  return (
    <Container id="contact">
      <Inner>
        <SectionHeader>
          <h2>Contato</h2>
          <p>
            Se você gostou do meu trabalho e quer conversar sobre projetos,
            oportunidades ou colaborações, entre em contato:
          </p>
        </SectionHeader>

        <LinksNav aria-label="Links de contato">
          <LinksList>
            <LinkItem>
              <a href="mailto:munhozleonardo756@gmail.com">
                munhozleonardo756@gmail.com
              </a>
            </LinkItem>

            <LinkItem>
              <a
                href="https://github.com/munhozleonardo756-ops"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </LinkItem>
          </LinksList>
        </LinksNav>
      </Inner>
    </Container>
  );
};

export default Contact;
