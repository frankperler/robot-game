import { RobotState } from "../Types";

export const initialState: RobotState = {
  isPlaced: false,
  coordinate: null,
  facing: null,
  move: { x: 0, y: 1 },
  rotateDeg: 0,
  commands: [],
  errorMessage: ''
};