export interface CoordinateObject {
  x: number;
  y: number;
}

export interface RobotState {
  isPlaced: boolean;
  coordinate: CoordinateObject;
  facing: string | null;
  move: CoordinateObject;
  commands: string[];
  errorMessage: string;
}
export interface ApplicationState {
  robot: RobotState;
}

export type Orientation = Record<Direction | string, CoordinateObject>;
export type Direction = 'NORTH' | 'SOUTH' | 'WEST' | 'EAST';

