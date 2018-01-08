let Board = function () {
  this.board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  this.turn = 0;
}

Board.prototype = {
  // initate game  
  play: () => {
    // while check !== true
      // console prompt player 1 to make a move
        // increase turn count
          // if turn count >= 5 
            // run check
      // console prompt player 2 to make a move
        // increase turn count
          // if turn count >= 5 
            // run check
  },

  // allow player to make move
  move: () => {
    // toggles selected location
      // if player 1 toggle to X
      // if player 2 toggle to O
  },

  // check if any player has winning results
  check: () => {
    // check if any 3 locations are consecutivly X or O
      // if X, prompt player 1 wins
      // if O, prompt player 2 wins
    // if turn = 9 
      // prompt game is a Tie
  }
}

let x = new Board();
console.log(x)