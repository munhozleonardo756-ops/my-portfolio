import styled from "styled-components";

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.12s ease, box-shadow 0.15s ease,
    border-color 0.15s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
    border-color: ${({ theme }) => theme.colors.primarySoft};
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 0.9rem;
  object-fit: cover;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.colors.primarySoft};
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.subtleText};
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const SkillTag = styled.span`
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 500;
`;

export const ViewButton = styled.button`
  margin-top: 0.75rem;
  align-self: flex-start;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: none;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease,
    box-shadow 0.15s ease;

  box-shadow: 0 6px 18px rgba(29, 112, 229, 0.35);

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(18, 75, 158, 0.45);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(18, 75, 158, 0.35);
  }
`;
