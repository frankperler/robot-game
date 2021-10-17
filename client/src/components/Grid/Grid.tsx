import * as React from 'react'
import { Box, ColumnContainer, GameBoard } from '../StyledComponents/StyledComponents'
import { Robot } from '../Robot/Robot'
import { robotContext } from '../../contexts/RobotContext'

export const Board = () => {
  const rows: number[] = [4, 3, 2, 1, 0]
  const columns: number[] = [0, 1, 2, 3, 4];

  const { stateRobot } = React.useContext(robotContext)

  const drawBoard = React.useCallback(
    (colIndex: number) => (
      <ColumnContainer key={`y-${colIndex}`}>
        {rows.map((rowIndex: number) => {
          if (stateRobot.isPlaced === true && stateRobot.coordinate?.x === colIndex && stateRobot.coordinate?.y === rowIndex) {
            return (
              <Box key={`x-${rowIndex}`}>
                <Robot />
              </Box>
            )
          } else {
            return <Box key={`x-${rowIndex}`} />
          }
        })
        }
      </ColumnContainer>
    ),
    [rows]
  );

  return (
    <GameBoard>
      {columns.map(drawBoard)}
    </GameBoard>
  )
}
