import { CoordinateObject, Orientation } from "../types";

export const TABLE_DIMENSION: CoordinateObject = {
  x: 5,
  y: 5
};

export const ORIENTATION: Orientation = {
  NORTH: { x: 0, y: 1 },
  EAST: { x: 1, y: 0 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 }
};

export const CommandTypes: string[] = ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT", "RESET"]
export const DirectionTypes: string[] = ["NORTH", "SOUTH", "WEST", "EAST"]