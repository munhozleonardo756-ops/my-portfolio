import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 1.5rem 5rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
`;

export const Inner = styled.div`
  width: min(100%, 960px);
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;

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

export const CategoryGroup = styled.section`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SkillTag = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primaryDark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  white-space: nowrap;
`;
