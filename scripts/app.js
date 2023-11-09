
// ! Elements 
//part of the bonus
//const player1Score = document.querySelector('.current-score1')
//const player2Score = document.querySelector('.current-score2')

// Variables
const player1 = 'R'
const player2 = 'Y'
let currentPlayer = player1
let gameOver = false
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
    const rowNumber = Math.floor( i / width)
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
  console.log('hi')
}

function endGame(message) {
  console.log(message)
}

//Get all 7 columns, based on what index i pressed i need to know what column i selected and how do i get the id based on what imdex i clicked on top row. whatever i do for column 0 i will repeat for all 7 columns

// const colZero = document.querySelectorAll('.col-0')
// //This block of code sets up an event listener for each cell in the first column ('col-0'). It listens for a click on any of these cells.
// colZero.forEach((element) => {
//   element.addEventListener('click', () => {
//     const columnIndex = parseInt(element.innerText)
//     console.log(`clicked on column 0,ID: ${columnIndex}`)
//     if (columnIndex === 0) {
//       const cellsInColumn = document.querySelectorAll('.col-0')
//       let targetCell = null
//       // Iterate from the bottom to the top in 'column 0'
//       //I set up a loop to iterate over the cells in 'col-0' from the bottom (last cell) to the top (first cell).
//       for (let i = cellsInColumn.length - 1; i >= 0; i--) {
//         if (!cellsInColumn[i].classList.contains('occupied')) {
//           //Within the loop, i checked if the current cell is not already marked as 'occupied.' If it's not taken, it's a valid space to place the player's piece.
//           targetCell = cellsInColumn[i]
//           targetCell.classList.add('occupied')
//           //This code shows that the space is now taken^
//           console.log(`Added class to cell ID: ${targetCell.id}`)
//           //This intitiates players turn and color
//           if (currentPlayer === 1) {
//             targetCell.style.backgroundColor = 'yellow'
//           } else {
//             targetCell.style.backgroundColor = 'red'
//           }
//           // - If no win, draw, or game-over, toggle to the next player for their turn.
//           // * if (draw !== true && no one has won) return next below as said below
//           // Toggle the current player for the next move
//           //After each move, we toggle the currentPlayer between 1 and 2, ensuring that it switches to the other player's turn for the next move.
//           currentPlayer = currentPlayer === 1 ? 2 : 1
//           // This switches the value of 'currentPlayer' between 1 and 2. If it's currently 1, it becomes 2, and if it's currently 2 or any other value, it becomes 1. 
//           if (isDraw()){
//             endGame('draw')
//           }
//           break // This exits the loop after adding the class to the first available space, this prevents placing multiple cells in a single move.
//         }
//       }
//     }
//   })
// })

function isDraw() {

  for (let i = cells.length - 1; i >= 0; i--) {
    if (!cells[i].classList.contains('occupied')) {
      return false
    }
  }
  return true // All cells are occupied, it's a draw.
}


//function checkForWin() {
//console.log('hi')
//check every column, row and diagnoly for a win by using for loop and if statement
//}
//checkForWin()

//repeated for all 7 columns



// const colOne = document.querySelectorAll('.col-1')
// colOne.forEach((element) => {
//   element.addEventListener('click', takeTurn)
// })

function takeTurn(event) {
  const element = event.target
  const columnIndex = parseInt(element.dataset.col)
  console.log(columnIndex)
  const cellsInColumn = document.querySelectorAll(`.col-${columnIndex}`)
  console.log(cellsInColumn)
  let targetCell = null
  for (let i = cellsInColumn.length - 1; i >= 0; i--) {
    if (!cellsInColumn[i].classList.contains('occupied')) {
      targetCell = cellsInColumn[i]
      targetCell.classList.add('occupied')
      if (currentPlayer === 1) {
        targetCell.style.backgroundColor = 'yellow'
      } else {
        targetCell.style.backgroundColor = 'red'
      }
      currentPlayer = currentPlayer === 1 ? 2 : 1
      if (isDraw()){
        endGame('draw')
      }
      break
    }
  }
}

// const colTwo = document.querySelectorAll('.col-2')
// colTwo.forEach((element) => {
//   element.addEventListener('click', () => {
//     const columnIndex = parseInt(element.innerText)
//     if (columnIndex === 2) {
//       const cellsInColumn = document.querySelectorAll('.col-2')
//       let targetCell = null
//       for (let i = cellsInColumn.length - 1; i >= 0; i--) {
//         if (!cellsInColumn[i].classList.contains('occupied')) {
//           targetCell = cellsInColumn[i]
//           targetCell.classList.add('occupied')
//           if (currentPlayer === 1) {
//             targetCell.style.backgroundColor = 'yellow'
//           } else {
//             targetCell.style.backgroundColor = 'red'
//           }
//           currentPlayer = currentPlayer === 1 ? 2 : 1
//           if (isDraw()){
//             endGame('draw')
//           }
//           break
//         }
//       }
//     }
//   })
// })



// const colThree = document.querySelectorAll('.col-3')
// colThree.forEach((element) => {
//   element.addEventListener('click', () => {
//     const columnIndex = parseInt(element.innerText)
//     if (columnIndex === 3) {
//       const cellsInColumn = document.querySelectorAll('.col-3')
//       let targetCell = null
//       for (let i = cellsInColumn.length - 1; i >= 0; i--) {
//         if (!cellsInColumn[i].classList.contains('occupied')) {
//           targetCell = cellsInColumn[i]
//           targetCell.classList.add('occupied')
//           if (currentPlayer === 1) {
//             targetCell.style.backgroundColor = 'yellow'
//           } else {
//             targetCell.style.backgroundColor = 'red'
//           }
//           currentPlayer = currentPlayer === 1 ? 2 : 1
//           if (isDraw()){
//             endGame('draw')
//           }
//           break
//         }
//       }
//     }
//   })
// })




// const colFour = document.querySelectorAll('.col-4')
// colFour.forEach((element) => {
//   element.addEventListener('click', () => {
//     const columnIndex = parseInt(element.innerText)
//     if (columnIndex === 4) {
//       const cellsInColumn = document.querySelectorAll('.col-4')
//       let targetCell = null
//       for (let i = cellsInColumn.length - 1; i >= 0; i--) {
//         if (!cellsInColumn[i].classList.contains('occupied')) {
//           targetCell = cellsInColumn[i]
//           targetCell.classList.add('occupied')
//           if (currentPlayer === 1) {
//             targetCell.style.backgroundColor = 'yellow'
//           } else {
//             targetCell.style.backgroundColor = 'red'
//           }
//           currentPlayer = currentPlayer === 1 ? 2 : 1
//           if (isDraw()){
//             endGame('draw')
//           }
//           break
//         }
//       }
//     }
//   })
// })



// const colFive = document.querySelectorAll('.col-5')
// colFive.forEach((element) => {
//   element.addEventListener('click', () => {
//     const columnIndex = parseInt(element.innerText)
//     if (columnIndex === 5) {
//       const cellsInColumn = document.querySelectorAll('.col-5')
//       let targetCell = null
//       for (let i = cellsInColumn.length - 1; i >= 0; i--) {
//         if (!cellsInColumn[i].classList.contains('occupied')) {
//           targetCell = cellsInColumn[i]
//           targetCell.classList.add('occupied')
//           if (currentPlayer === 1) {
//             targetCell.style.backgroundColor = 'yellow'
//           } else {
//             targetCell.style.backgroundColor = 'red'
//           }
//           currentPlayer = currentPlayer === 1 ? 2 : 1
//           if (isDraw()){
//             endGame('draw')
//           }
//           break
//         }
//       }
//     }
//   })
// })


// const colSix = document.querySelectorAll('.col-6')
// colSix.forEach((element) => {
//   element.addEventListener('click', () => {
//     const columnIndex = parseInt(element.innerText)
//     if (columnIndex === 6) {
//       const cellsInColumn = document.querySelectorAll('.col-6')
//       let targetCell = null
//       for (let i = cellsInColumn.length - 1; i >= 0; i--) {
//         if (!cellsInColumn[i].classList.contains('occupied')) {
//           targetCell = cellsInColumn[i]
//           targetCell.classList.add('occupied')
//           if (currentPlayer === 1) {
//             targetCell.style.backgroundColor = 'yellow'
//           } else {
//             targetCell.style.backgroundColor = 'red'
//           }
//           currentPlayer = currentPlayer === 1 ? 2 : 1
//           if (isDraw()){
//             endGame('draw')
//           }
//           break
//         }
//       }
//     }
//   })
// })


//points counter
//pointsCounter.innerText = Number(pointsCounter.innerText) + 100
//Review lessons about: for loops 


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


