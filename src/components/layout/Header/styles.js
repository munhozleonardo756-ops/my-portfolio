import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

export const Brand = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

export const Item = styled.li``;
