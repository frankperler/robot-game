import * as React from 'react';
import img from '../../robot.jpg'
import { FlexContainer } from '../StyledComponents/StyledComponents';
import { robotContext } from '../../contexts/RobotContext';

export const Robot = () => {

  const { stateRobot } = React.useContext(robotContext)

  return (
    <FlexContainer flexDir="column">
      <img src={img} alt="Robot" style={{ width: "30%", height: "30%", marginTop: "1.8rem", backgroundRepeat: "no-repeat" }}></img>
      <div style={{ color: "black", fontSize: "0.8rem" }}>{stateRobot.facing}</div>
    </FlexContainer >
  )
}