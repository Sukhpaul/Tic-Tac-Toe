// create 3x3 board
// 1 = X, 2 = O
// 2 players go turn by turn, informed whos turn it is 

let Board = function () {
  this.board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
}

Board.prototype = {
  play: () => {
    // initate game   
  },

  move: () => {
    // allow player to make move
  },

  check: () => {
    // check if any player has winning results
  }
}

let x = new Board();
console.log(x)