import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 1.5rem 5rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const Inner = styled.div`
  width: min(100%, 720px);
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.subtleText};
  }
`;

export const EducationCard = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1.25rem;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const DegreeTag = styled.span`
  align-self: flex-start;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.primarySoft};
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
`;

export const Course = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Institution = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.subtleText};
`;

export const Period = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`;
