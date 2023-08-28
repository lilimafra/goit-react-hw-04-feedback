import styled from 'styled-components';

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 0;
  margin-top: 25px;
  padding: 0;
`;

export const BtnFeedback = styled.button`
  border-radius: 5px;
  background-color: white;
  border: 0.5px solid grey;
  font-weight: 600;
  padding: 5px;
  text-transform: capitalize;
  cursor: pointer;

  &:active {
    background: linear-gradient(to right, #536976, #292e49);
  }
`;
