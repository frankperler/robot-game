import React from "react";
import { Box, GameBoard } from "../StyledComponents/HelperComponents";

export const BaseGrid = () => {

  const n = 25;

  return (
    <GameBoard>
      {[...Array(n)].map((e, i) => <Box />)}
    </GameBoard>
  );
}