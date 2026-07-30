import styled from "styled-components";

export const Container = styled.footer`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primaryDark} 0%,
    ${({ theme }) => theme.colors.text} 100%
  );
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Line = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textOnPrimary};
`;
