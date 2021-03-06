import * as React from 'react'
import { Box, Text } from '../StyledComponents/StyledComponents'

export const Instructions = () => {

  return (
    <Box width="30rem" height="16rem" borderRadius="4px" display="flex" flexDir="column">
      <Text style={{ fontSize: "1.5rem", textDecoration: "underline" }} textAlign="center">INSTRUCTIONS:</Text><br /><br />
      <Text>PLACE X Y F: places the robot on the board at X and Y facing F </Text><br /> 
      <Text>MOVE: moves the robot by one square in the direction</Text><br />
      <Text>LEFT: turns the robot by 90° on the left</Text><br />
      <Text>RIGHT: turns the robot by 90° on the right</Text><br />
      <Text>REPORT: outputs the position on the board</Text><br />
    </Box >
  )
}
