type PlaceAction = {
  type: 'PLACE'
  payload: null
}

type MoveAction = {
  type: 'MOVE'
  payload: null
}

type LeftAction = {
  type: 'LEFT'
  payload: null
}

type RightAction = {
  type: 'RIGHT'
  payload: null
}

type ReportAction = {
  type: 'REPORT'
  payload: null
}

type ResetAction = {
  type: 'RESET'
  payload: null
}

export type RobotActions = PlaceAction | MoveAction | LeftAction | RightAction | ReportAction | ResetAction;