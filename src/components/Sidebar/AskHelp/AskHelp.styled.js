import styled from 'styled-components';

export const HelpBox = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.barAdditionalBg};
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const HelpText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.barPrimaryText};
  margin-bottom: 18px;
`;
export const HelpSpan = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const HelpButton = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  border: none;
  gap: 8px;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.barPrimaryText};
`;

export const HelpIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
