import { RobotState } from "../types";
import { RobotActions } from "../actions/RobotActions";
import { ORIENTATION } from "../utils/constants";
import { rotate } from "../utils/functions";

export const initialRobotState: RobotState = {
  isPlaced: false,
  coordinate: { x: 1, y: 0 },
  facing: null,
  move: { x: 0, y: 1 },
  commands: [],
};

export const robotReducers = (state = initialRobotState, action: RobotActions) => {
  if (action.type === "COMMAND") {
    const firstCommand = action.payload[0];
    if (firstCommand === "PLACE") {
      const x = +action.payload[1];
      const y = +action.payload[2];
      const direction = action.payload[3];
      return {
        ...state,
        facing: direction,
        coordinate: { x: x, y: y },
        move: ORIENTATION[direction],
        isPlaced: true,
        commands: [...state.commands, `${"PLACE"} ${x},${y},${direction}`]
      }
    } else if (firstCommand === "MOVE") {
      return {
        ...state,
        ...(state.isPlaced &&
          state.coordinate !== null && {
          coordinate: {
            x: state.coordinate.x + state.move.x,
            y: state.coordinate.y + state.move.y
          },
          commands: [...state.commands, `${"MOVE"}`]
        })
      };
    } else if (firstCommand === "LEFT") {
      const newFacing = rotate(state.facing!, firstCommand)
      return {
        ...state,
        ...(state.isPlaced && {
          facing: newFacing,
          move: ORIENTATION[newFacing],
          commands: [...state.commands, `${"LEFT"}`]
        })
      };
    } else if (firstCommand === "RIGHT") {
      const newFacing = rotate(state.facing!, firstCommand)
      return {
        ...state,
        ...(state.isPlaced && {
          facing: newFacing,
          move: ORIENTATION[newFacing],
          commands: [...state.commands, `${"RIGHT"}`]
        })
      };
    } else if (firstCommand === "REPORT") {

      return {
        ...state,
        ...(state.isPlaced &&
          state.coordinate !== null && {
          commands: [
            ...state.commands,
            `OUTPUT: ${state.coordinate.x},${state.coordinate.y},${state.facing}`
          ]
        })
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
      commands: [],
    };
  }
  return state;
}