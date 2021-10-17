import * as React from "react";
import { initialRobotState } from "../reducers/RobotReducer";
import { RobotActions } from "../actions/RobotActions";
import { RobotState } from "../types";

export const robotContext = React.createContext<{
  stateRobot: RobotState;
  dispatchRobot: React.Dispatch<RobotActions>;
}>({
  stateRobot: initialRobotState,
  dispatchRobot: () => undefined,
});