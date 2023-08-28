import styled from 'styled-components';

export const SectionBox = styled.section`
  display: block;
  margin: 0 auto;
  padding: 20px 60px;
  width: 300px;
  background: #57aebd;

  &:first-child {
    border-radius: 10px 10px 0 0;
    margin-top: 100px;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  margin: 0;
`;
