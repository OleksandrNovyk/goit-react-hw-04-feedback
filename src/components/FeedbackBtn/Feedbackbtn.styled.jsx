import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  border: none;
  background-color: transparent;
  transform: scale(1);
  cursor: pointer;
  background-color: ${props =>
    props.status === 'good'
      ? 'rgba(0, 128, 75, 0.8)'
      : props.status === 'neutral'
      ? 'rgba(224, 201, 50, 0.8)'
      : 'rgba(202, 30, 30, 0.8)'};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }
`;
