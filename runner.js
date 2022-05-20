// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  console.log('parser');
  return puzzle;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function myZapolnenie( puzzle) {
  
  let arr = puzzle.split('')
  for( let i=0; i < arr.length; i++) {
    if ( arr[i] === '-' ) {
      let n1 = getRandomInt( 1, 10)
      arr[i] = n1.toString()
     
    }
   
  
  }  
  
  let s1 = arr.join('')

  // console.log( 's1 ' , s1)
  return s1
}



function readAndSolve(err, data) {
  
  if (err) {
    console.log('readAndSolve   - err' )
    throw err;
  }
    let puzzle = sudokuParse(data);
  
  let solvedPuzzle = sudoku.solve(puzzle);
  //заполнить таблицу
  solvedPuzzle = myZapolnenie( puzzle)

  console.log('solvedPuzzle ', solvedPuzzle )


  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");
    console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}


// Reads file and sends data from it to the readAndSolve function.
// console.log( 'readFile')
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);


