import styled from 'styled-components'

export const FlexContainer = styled("div") <{ flexDir?: string }>`
    display: flex;
    flex-direction: ${props => props.flexDir || "row"};;
    align-items: center;
    justify-content: center;
    color: #f4b860;
    width: auto;
    height: auto;
`

export const Title = styled.h1`
    font-size: 4rem;
    text-shadow: 1rem;
    color: #f4b860;
`

export const GameBoard = styled.div`
    display: grid;
    grid-template-columns:7rem 7rem 7rem 7rem 7rem;
    grid-template-rows: 7rem 7rem 7rem 7rem 7rem;
    justify-content: center;
`

export const Box = styled.div`
    background-color: #f4b860;
    border: 1px solid black;
    width:100%;
    height: 100%;
`

export const ColumnContainer = styled.div`
    background-color: #f4b860;
    display: flex;
    flex-direction: column;
    width:7rem;
    height: 35rem;
`

export const InputField = styled.input <{ inputColor?: string }>`
  margin: 1rem;
  width: 25rem;
  height: 3rem;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 4px;
`