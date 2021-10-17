import { RobotState } from "../types";
import { RobotActions } from "../actions/RobotActions";

export const initialRobotState: RobotState = {
  isPlaced: false,
  coordinate: { x: 1, y: 0 },
  facing: null,
  move: { x: 0, y: 1 },
  // rotateDeg: 0,
  commands: [],
};

export const robotReducers = (state = initialRobotState, action: RobotActions) => {
  if (action.type === "COMMAND") {
    console.log(action.payload)
    console.log(state)
    const firstCommand = action.payload[0];
    if (firstCommand === "PLACE") {
      const x = action.payload[1];
      const y = action.payload[2];
      const f = action.payload[3];
      return {
        ...state,
        facing: { f },
        coordinate: { x, y },
        // rotateDeg: 0,
        isPlaced: true,
        commands: [...state.commands, `${"PLACE"} ${x},${y},${f}`]
      };
    }
    return state;
  }
  if (action.type === "RESET") {
    return {
      isPlaced: false,
      coordinate: null,
      facing: null,
      move: { x: 0, y: 1 },
      // rotateDeg: 0,
      commands: [],
    };
  }
  return state;
}