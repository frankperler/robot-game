export interface CoordinateObject {
  x: number;
  y: number;
}

export type Direction = 'NORTH' | 'SOUTH' | 'WEST' | 'EAST';

export interface RobotState {
  isPlaced: boolean;
  coordinate: CoordinateObject | null;
  facing: Direction | null;
  move: CoordinateObject;
  // rotateDeg: number;
  commands: string[];
}
export interface ApplicationState {
  robot: RobotState;
}