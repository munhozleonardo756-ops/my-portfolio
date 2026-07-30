import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 1.5rem 5rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
`;

export const Inner = styled.div`
  width: min(100%, 720px);
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.subtleText};
  }
`;

export const LinksNav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const LinkItem = styled.li`
  a {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.accent};
      transition: width 0.18s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;
