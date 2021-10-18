type CommandAction = {
  type: 'COMMAND'
  payload: string[]
}

type ResetAction = {
  type: 'RESET'
}

export type RobotActions = CommandAction | ResetAction;