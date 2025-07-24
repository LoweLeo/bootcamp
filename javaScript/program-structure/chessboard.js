let size = 8;
let board = "";

for (let row = 0; row < size; row = row + 1) {
  for (let column = 0; column < size; column = column + 1) {
    if ((row + column) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}

console.log(board);
