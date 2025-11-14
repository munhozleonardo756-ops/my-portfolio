import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 0 4rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primarySoft};
`;

export const Inner = styled.div`
  max-width: 720px;
  text-align: center;
  margin: 0 1.5rem;
`;

export const Label = styled.span`
  display: block;
  font-size: 0.875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const MainTitle = styled.h1`
  font-size: 2.6rem;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.subtleText};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
`;

const BaseButton = styled.a`
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease, box-shadow 0.15s ease,
    background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Highlights = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 0.875rem;
  flex-wrap: wrap;
`;

export const HighlightItem = styled.li`
  position: relative;
  padding-left: 1.1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;
