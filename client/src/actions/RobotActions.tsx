type CommandAction = {
  type: 'COMMAND'
  payload: string[]
}

type PlaceAction = {
  type: 'PLACE'
  payload: string[]
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
}

export type RobotActions = PlaceAction | MoveAction | LeftAction | RightAction | ReportAction | ResetAction | CommandAction;