import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
`;

export const SectionHeader = styled.header`
  max-width: 900px;
  margin: 0 auto 2.5rem;
  text-align: center;

  h2 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.subtleText};
  }
`;

export const Timeline = styled.ol`
  max-width: 900px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.primarySoft};
  }
`;

export const Employment = styled.li`
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 1.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 0.4rem;
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.surface};
    border: 3px solid ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
  }
`;

export const Occupation = styled.h3`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

export const Period = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.subtleText};
  line-height: 1.5;
`;
