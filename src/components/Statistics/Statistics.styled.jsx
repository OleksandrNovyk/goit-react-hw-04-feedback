import styled from 'styled-components';

export const StatWrapper = styled.ul`
  width: 30vw;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 12px;
  list-stile: none;
  margin: 0;
  background-color: hsla(215, 98%, 79%, 0.2);
  border: 2px solid lightblue;
`;

export const StatItem = styled.li`
  margin: 0;
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 12px;
  border-radius: 12px;
  box-shadow: 2px 2px 5px #fff;

  & > svg {
    margin-right: 20px;
  }
`;
