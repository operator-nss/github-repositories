import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 12px;
`;

export const StarCount = styled.p`
  font-size: 0.9rem;
  color: #ffab00;
  font-weight: bold;
  display: flex;
  align-items: center;

  &::before {
    content: '⭐';
    margin-right: 4px;
  }
`;
