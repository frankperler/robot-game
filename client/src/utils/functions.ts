export const rotate = (facingDir: string, command: string): string => {
  if (command === "LEFT") {
    if (facingDir === "NORTH") return "WEST"
    if (facingDir === "WEST") return "SOUTH"
    if (facingDir === "SOUTH") return "EAST"
    else return "NORTH"
  }
  else {
    if (facingDir === "NORTH") return "EAST"
    if (facingDir === "EAST") return "SOUTH"
    if (facingDir === "SOUTH") return "WEST"
    else return "NORTH"
  }
}