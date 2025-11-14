import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.primarySoft};
  width: min(100%, 1200px);
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;
