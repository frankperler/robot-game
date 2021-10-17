import { RobotState } from "../types";
import { RobotActions } from "../actions/RobotActions";

export const initialRobotState: RobotState = {
  isPlaced: false,
  coordinate: null,
  facing: null,
  move: { x: 0, y: 1 },
  rotateDeg: 0,
  commands: [],
};

export const robotReducers = (state = initialRobotState, action: RobotActions) => {

  return state;
}