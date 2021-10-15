import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #F4B860;
  width: auto;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 1rem;
  color: #F4B860;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: 4rem 4rem 4rem 4rem 4rem;
  grid-template-rows: 4rem 4rem 4rem 4rem 4rem;
  justify-content: center;
`;

export const Box = styled.div`
  background-color: #F4B860;
  border: 2px solid black;
`;

