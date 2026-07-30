import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primarySoft},
    ${({ theme }) => theme.colors.surfaceMuted}
  );
  padding: 4rem 1.5rem 5rem;
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.6rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.subtleText};
    font-weight: normal;
    max-width: 560px;
    margin: 0.25rem auto 1rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  gap: 1.5rem;

  /* grid responsivo bonitinho */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;
