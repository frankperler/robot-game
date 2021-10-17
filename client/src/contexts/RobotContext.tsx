import * as React from "react";

import { initialRobotState } from "../reducers/RobotReducer";
import { RobotActions } from "../actions/RobotActions";
import { RobotState } from "../types";

export const robotContext = React.createContext<{
  robotState: RobotState;
  dispatchRobotActions: React.Dispatch<RobotActions>;
}>({
  robotState: initialRobotState,
  dispatchRobotActions: () => undefined,
});