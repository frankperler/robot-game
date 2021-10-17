import { RobotState } from "../types";
import { RobotActions } from "../actions/RobotActions";
import { ORIENTATION } from "../utils/constants";
import { rotate } from "../utils/functions";
import { DirectionTypes } from "../utils/constants";

export const initialRobotState: RobotState = {
  isPlaced: false,
  coordinate: { x: 1, y: 0 },
  facing: null,
  move: { x: 0, y: 1 },
  commands: [],
  errorMessage: ""
};

export const robotReducers = (state = initialRobotState, action: RobotActions) => {
  if (action.type === "COMMAND") {
    const firstCommand = action.payload[0];
    if (firstCommand === "PLACE") {
      const x = +action.payload[1];
      const y = +action.payload[2];
      const direction = action.payload[3];
      if (x > 4 || y > 4 || x < 0 || y < 0) {
        alert('You cannot go there you would fall')
        return state;
      } else if (!DirectionTypes.includes(direction)) {
        alert('This is not a valid command. Try again')
        return state;
      }
      return {
        ...state,
        facing: direction,
        coordinate: { x: x, y: y },
        move: ORIENTATION[direction],
        isPlaced: true,
        commands: [...state.commands, `${"PLACE"} ${x},${y},${direction}`]
      }
    } else if (firstCommand === "MOVE") {
      const newX = state.coordinate.x + state.move.x
      const newY = state.coordinate.y + state.move.y
      if (newX > 4 || newY > 4 || newY < 0 || newX < 0) {
        alert('You cannot go there you would fall')
        return state;
      }
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
    return initialRobotState;
  }

  return state;
}