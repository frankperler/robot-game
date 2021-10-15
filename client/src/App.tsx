import React from 'react';
import './App.css';
import { BaseGrid } from './Components/Grid/Grid'
import { Title, FlexContainer } from './Components/StyledComponents/HelperComponents'

function App() {
  return (
    <div className="App">
      <FlexContainer>
        <Title>Robot Game</Title>
        <BaseGrid />
      </FlexContainer>
    </div>
  );
}

export default App;
