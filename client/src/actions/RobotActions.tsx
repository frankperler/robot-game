type CommandAction = {
  type: 'COMMAND'
  payload: string[]
}

type ErrorAction = {
  type: 'ERROR'
}

type ResetAction = {
  type: 'RESET'
}

export type RobotActions = CommandAction | ResetAction | ErrorAction;