'use strict'

function chessboard(size) {
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
      line += (i + j) % 2 == 0? " " : "#";
    }
    console.log(line);
  }
}

chessboard(8);
      
