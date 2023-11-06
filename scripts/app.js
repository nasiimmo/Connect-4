
// ! Elements 
const player1Score = document.querySelector('.current-score1')
const player2Score = document.querySelector('.current-score2')

// Variables
const player1 = 'R'
const player2 = 'Y'
let currentPlayer = player1
let gameOver = false
let board = [] // You need to initialize the board as an empty array
const rows = 6
const columns = 7
const startBtn = document.querySelector('#start-btn')
const playAgainBtn = document.querySelector('#restart-btn') // Correct the typo

const grid = document.querySelector('#board')
const cells = []

let currentPos = 0

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
    const columnNumber = i % width
    cell.classList.add(`col-${columnNumber}`)
    cell.innerText = i
    cell.id = i
    cell.style.width = `${90 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
}
function currentCell(index) {
  console.log('hi')
}
//get all 7 columns, based on what index i pressed i need to know what column i selected and how do i get the id based on what imdex i clicked on top row.
const colZero = document.querySelectorAll('.col-0')
colZero.forEach((element) => {
  element.addEventListener('click', () => {
    const columnIndex = parseInt(element.innerText)
    console.log(`clicked on column 0,ID: ${columnIndex}`)
  })
})
const colOne = document.querySelectorAll('.col-1')
colOne.forEach((element) => {
  element.addEventListener('click', () => {
    const columnIndex = parseInt(element.innerText)
    console.log(`clicked on column 1,ID: ${columnIndex}`)
  })
})
const colTwo = document.querySelectorAll('.col-2')
colTwo.forEach((element) => {
  element.addEventListener('click', () => {
    const columnIndex = parseInt(element.innerText)
    console.log(`clicked on column 2,ID: ${columnIndex}`)
  })
})
const colThree = document.querySelectorAll('.col-3')
colThree.forEach((element) => {
  element.addEventListener('click', () => {
    const columnIndex = parseInt(element.innerText)
    console.log(`clicked on column 3,ID: ${columnIndex}`)
  })
})
const colFour = document.querySelectorAll('.col-4')
colFour.forEach((element) => {
  element.addEventListener('click', () => {
    const columnIndex = parseInt(element.innerText)
    console.log(`clicked on column 4,ID: ${columnIndex}`)
  })
})
const colFive = document.querySelectorAll('.col-5')
colFive.forEach((element) => {
  element.addEventListener('click', () => {
    const columnIndex = parseInt(element.innerText)
    console.log(`clicked on column 5,ID: ${columnIndex}`)
  })
})
const colSix = document.querySelectorAll('.col-6')
colSix.forEach((element) => {
  element.addEventListener('click', () => {
    const columnIndex = parseInt(element.innerText)
    console.log(`clicked on column 6,ID: ${columnIndex}`)
  })
})

//review lessons about: for loops 
//if top row is clicked add class to next available space from down up
//does it have color class already if it doesnt add class if it doesnt check next array

//Add event listeners to the top row cells in the columns

//how will i know what column i clicked on

// Listen for clicks on the grid cells.
// When a cell is clicked, find an available space in that column
// Add the current player's color to the first available empty cell in the column.
// Check for a win condition.
// make a function to check for a win - diagnally aswell
// - If no win, draw, or game-over, toggle to the next player for their turn.
//if the board is full
//print "Its a draw"


// How will the board know where to find an available space in a column

// To find an available space in a column:
// - Start from the bottom row.
// - Iterate upwards until an empty cell is found.
// - Mark that cell with the current player's color.
// create a function to find the empty row index for a given column


// Switch to the other player
// Add event listener to handle player choices

// make red and yellow color appear based on whos turn it is




// Start button click event listener
startBtn.addEventListener('click', startGame)

function startGame() {
  // Initialize the game board
}


// *  bonus
//when game ends add points to winner of previous game.
//how do i get a modal to pop up after gameis finished
//add a gif as background
//Play again button which clears the board and restarts.

// Clear the grid
// ! page Load
//make createGrid to create the initial game grid

