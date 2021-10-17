import styled from 'styled-components'

export const FlexContainer = styled("div") <{ flexDir?: string }>`
    display: flex;
    flex-direction: ${props => props.flexDir || "row"};
    align-items: center;
    justify-content: center;
    color: #f4b860;
    width: auto;
    height: auto;
`

export const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    text-shadow: 1rem;
    color: #C83E4D;
`

export const GameBoard = styled.div`
    display: grid;
    grid-template-columns:7rem 7rem 7rem 7rem 7rem;
    grid-template-rows: 7rem 7rem 7rem 7rem 7rem;
    justify-content: center;
`

export const Box = styled.div <{ width?: string, height?: string, borderRadius?: string, margin?: string }>`
    background-color: #f4b860;
    border: 1px solid black;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    border-radius: ${(props) => props.borderRadius || "0px"};
    margin: ${(props) => props.margin || "0rem"};
    color: #F4d6CC;
    font-weight:bold;
    font-size: 1rem;
`

export const ColumnContainer = styled.div`
    background-color: #f4b860;
    display: flex;
    flex-direction: column;
    width:7rem;
    height: 35rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;
  margin: 0.5rem 2rem 1rem 2rem;
  width: 30rem;
  height: 10rem;
  background: #f4b860;
  border: none;
  border: 1px solid black;
  border-radius: 4px;
`

export const InputField = styled.input`
  margin: 1rem;
  width: 80%;
  height: 20%;
  text-align: center;
  color: black;
  background:#F4d6CC;
  border: none;
  border-radius: 4px;
`

export const Button = styled.button <{ inputColor?: string }>`
  margin: 1.5rem 2rem 1.5rem 2rem;
  width: 100%;
  height: 50%;
  text-align: center;
  color: ${props => props.inputColor || "#F4d6CC"};
  background: #C83E4D;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
export const Text = styled.text`
  margin: 1rem;
  font-size: 0.9rem;
  color: #C83E4D;
`

