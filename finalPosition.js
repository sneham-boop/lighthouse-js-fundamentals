const moves = ["north", "north", "west", "west", "north", "east", "north"];

function finalPosition(mv) {
  let pos = [0, 0];
  for (let i = 0; i < mv.length; i++) {
    if (mv[i] === "north") {
      pos[1] += 1;
    } else if (mv[i] === "west") {
      pos[0] -= 1;
    } else if (mv[i] === "south") {
      pos[1] -= 1;
    } else if (mv[i] === "east") {
      pos[0] += 1;
    }
  }
  return pos;
}

console.log(finalPosition(moves));
