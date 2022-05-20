// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
/*
Принимает доску в виде строки в формате, который вы видите в файле головоломки. 
Возвращает что-то, представляющее доску после того, как ваш решатель попытался ее решить. 
То, как вы представляете свою доску, зависит от вас!
*/
/*
1. Читает -
2. Разбивает - 
3. Выводит массив в return-e

*/
function solve(boardString) {
  // 1. Принял строку длиной 81 символ  boardString
  // 2. Разбил строку на 9 массивов по 9 символов
  // 3. Запушил 9 массивов в один массив
  // 4. Вернул один Массив результат.

  let regex = /(.{1}){9}/gm

  let strArr = boardString.match(regex) // возвращает массив из 9 элементов
  let result = strArr.map((elem) => elem.split(''))
  console.table(result)
  return result

}

console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))
// console.table(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
/*
Возвращает логическое значение, указывающее, решена ли предоставленная доска. 
Входная доска будет в той форме, в которой возвращает `solve`.
*/
/*

1. Проверка строки - Михаил
2. Проверка столбца - Павел Плеханов
3. Проверка квадратика - Павел Малышев

*/

function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
/*
Принимает доску в той или иной форме и возвращает строку, 
которая хорошо отформатирована для вывода на экран. 
Входная доска будет в той форме, в которой возвращает `solve`.
*/
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
//Экспортирует все функции, чтобы использовать их в другом файле.

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
