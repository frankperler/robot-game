import * as React from 'react'
import { Box, ColumnContainer, GameBoard } from '../StyledComponents/HelperComponents'

export const Board = () => {
  const rows: number[] = [1, 2, 3, 4, 5]
  const columns: number[] = [1, 2, 3, 4, 5];

  const drawBoard = React.useCallback(
    (rowIndex: number) => (
      <ColumnContainer key={`column-${rowIndex}`}>
        {rows.map((squareIndex: number) => (
          <Box key={`row-${squareIndex}`} />
        ))}
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
