import * as React from 'react'
import './App.css'
import { Board } from './components/Grid/Grid'
import { CommandCenter } from './components/CommandCenter/CommandCenter'
import {
  Title,
  FlexContainer,
} from './components/StyledComponents/StyledComponents'
import { robotReducers, initialRobotState } from './reducers/RobotReducer';
import { robotContext } from './contexts/RobotContext'

function App() {

  const [stateRobot, dispatchRobot] = React.useReducer(robotReducers, initialRobotState)

  return (
    <div className="App">
      <robotContext.Provider value={{ stateRobot, dispatchRobot }}>
        <FlexContainer flexDir="column">
          <Title>Robot Game</Title>
          <FlexContainer>
            <CommandCenter />
            <Board />
          </FlexContainer>
        </FlexContainer>
      </robotContext.Provider>
    </div>
  )
}

export default App
