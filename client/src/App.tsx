import * as React from 'react'
import './App.css'
import { Board } from './Components/Grid/Grid'
import { CommandCenter } from './Components/CommandCenter/CommandCenter'
import {
  Title,
  FlexContainer,
} from './Components/StyledComponents/HelperComponents'

function App() {
  return (
    <div className="App">
      <FlexContainer flexDir="column">
        <Title>Robot Game</Title>
        <FlexContainer>
          <CommandCenter />
          <Board />
        </FlexContainer>

      </FlexContainer>
    </div>
  )
}

export default App
