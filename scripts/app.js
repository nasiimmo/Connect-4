
// ! Elements 
//part of the bonus
//const player1Score = document.querySelector('.current-score1')
//const player2Score = document.querySelector('.current-score2')

// Variables
const player1 = 'R'
const player2 = 'Y'
let currentPlayer = player1

// You need to initialize the board as an empty array
const rows = 6
const columns = 7
const startBtn = document.querySelector('#start-btn')
// Correct the typo

//const pointsCounter = document.querySelector('.points-container')
//pointsCounter.innerText = 0

const grid = document.querySelector('#board')
const cells = []



// Grid
const width = 7
const height = 6
const cellCount = width * height

createGrid()
// Function to create the grid
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    if (i < 7) {
      cell.addEventListener('click', currentCell)
    }
    const rowNumber = Math.floor(i / width)
    cell.dataset.row = rowNumber
    const columnNumber = i % width
    cell.dataset.col = columnNumber
    cell.classList.add(`col-${columnNumber}`)
    cell.innerText = i
    cell.id = i
    cell.style.width = `${90 / width}%`
    grid.append(cell)
    cells.push(cell)
    cell.addEventListener('click', takeTurn)
  }
}

function currentCell() {
  console.log('hello')
}

function endGame(message) {
  console.log(message)
}

function isDraw() {

  for (let i = cells.length - 1; i >= 0; i--) {
    if (!cells[i].classList.contains('occupied')) {
      return false
    }
  }
  return true // All cells are occupied, it's a draw.
}


function isWin(colCells) {
  console.log('hi')
  //check every column, row and diagnally, other-diagnal for a win by using for loop and if statement
  console.log(colCells)
  //check column cells for 4 in a row
  //check each cell for class of occupied
  for (let i = 0; i < colCells.length; i++) {
    if (colCells[i].classList.contains('occupied')) {
      console.log('contains counter')
    } else {
      console.log('no counter')
    }
    // if class has occupied add 1 to the cell and if its 4 right next to each other in a row currrent player has won
  }
  
  for (let i = 0; i <= colCells.length - 4; i++) {
    const currentCell = colCells[i]
    if (
      currentCell.classList.contains('occupied') &&
      currentCell.dataset.player === colCells[i + 1].dataset.player &&
      //Checks if the player in the current cell is the same as the player in the next cell and so on.
      currentCell.dataset.player === colCells[i + 2].dataset.player &&
      currentCell.dataset.player === colCells[i + 3].dataset.player
    ) {
      console.log(`Player ${currentCell.dataset.player} wins!`)
      return true
    }
  }
  console.log('No player has won in this column.')
  return false
}






function takeTurn(event) {
  const element = event.target
  const columnIndex = parseInt(element.dataset.col)
  //console.log(columnIndex)
  const cellsInColumn = document.querySelectorAll(`.col-${columnIndex}`)
  const cellsInRow = document.querySelectorAll(`.col-${columnIndex}`)
  const cellsDiagonally1 = document.querySelectorAll(`.col-${columnIndex}`)
  const cellsDiagonally2 = document.querySelectorAll(`.col-${columnIndex}`)
  //console.log(cellsInColumn)
  let targetCell = null
  for (let i = cellsInColumn.length - 1; i >= 0; i--) {
    if (!cellsInColumn[i].classList.contains('occupied')) {
      targetCell = cellsInColumn[i]
      targetCell.classList.add('occupied')

      if (currentPlayer === 'R') {
        targetCell.style.backgroundColor = 'red'
      } else {
        targetCell.style.backgroundColor = 'yellow'
      }
      if (isWin(cellsInColumn, cellsInRow, cellsDiagonally1, cellsDiagonally2)) {
        endGame(`Player ${currentPlayer} is the winner !`)
      } else if (isDraw()) {
        endGame('draw')
      }
      currentPlayer = currentPlayer === 'R' ? 'Y' : 'R'
      break
    }
  }
}


// Listen for clicks on the grid cells.
// When a cell is clicked, find an available space in that column
// Add the current player's color to the first available empty cell in the column.

// * Check for a win condition.
// Make a function to check for a win - diagnally aswell

// - If no win, draw, toggle to the next player for their turn.
//If the board is full
//Print "Its a draw"


// How will the board know where to find an available space in a column

// To find an available space in a column:
// - Start from the bottom row.
// - Iterate upwards until an empty cell is found.
// - Mark that cell with the current player's color.
// create a function to find the empty row index for a given column


// Switch to the other player
// Add event listener to handle player choices

// make red and yellow color appear based on whos turn it is


// ! page Load


