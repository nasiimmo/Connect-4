// ! Elements 
//Player1 = A variable to store the player1

//Player2 = A variable to store the player2

//current player = A variable to store the current player

//set game status to false
//--is a variable to indicate whether the game is on going (true) or over(false)

//Start Button which starts the whole game

//Play again button 

//When game decides its winner or draw end the game 

// ! Variables
//current player is a variable to store a current player ('r' or 'y')
const player1 = 'red'
const player2 = 'yellow'
const currentPlayer = player1
const gameOver = false
//const board = createEmptyBoard(rows, columns)
const rows = 6
const columns = 7
const startBtn = document.querySelector('#start-btn')
const playAgainBtn = document.querySelector('#retart-Btn')

// ! Executions
//if start button is clicked start the game
startBtn.addEventLister('click', startGame)


//This is where the game starts after start button is pressed
function startGame() {

}

//function addcolor(){}
//display player 1 color red
//display color 2 yellow

// * grid
//Use a (for) loop to create a row and column with empty string
//create a for loop for row and column this will append them to the existing grid
//row.push() this is to a empty circle that pushes to the end of my grid

//document.createElement('div') - this creates a new div into my html
//how will i know what what column i licked on
//if id is clicked then check the row for any 
//if index[30] have a class of idex 0 if it does then check next until it is empty
//cell index that is empty add the class red
//repeat for all column that has been clicked
//what are the indexes make up the column i clicked on
//use the push function to push the cells onto the board

//onlick update depending on row that has been clicked
//make a const row that will find the available space on the board within the row, when a column is clicked
//make a function to find an available space in that row
//add an event listener for the column clicked
//when any top column is selected the player can iterate through the rows
//in that column to find the first available empty cell from the bottom up and add current players turn color,
//update whats displayed when the available space is found and color is added
//check for win condition
//if no one has won or drew, toggle to next player for their turn



//Make each starting point whatever row player wants within the grid
//Make sure when div is clicked,
//color is dropped the next avaialable space in the row, repeat for player 1 and 2 until board is full or winner is declared
//if 
//make sure game works as you go through

//when player 1 go is finished, start player 2 and repeat 
//till winner is declared or draw is declared


// ! Win condtion 
//function checkWinCondtion
//need to know when a player has 4 in a row, horizonatally, vertically, or diagonally.

//Check diagnal for win both ways
//Check row and column for a win 
//if checkWin(board, currentPlayer)
//print "Player" + currentPlayer + ' IS THE WINNER'

//if the board is full
//print "Its a draw"

// *  bonus
//when game ends add points to winner of previous game.

//Play again button which clears the board and restarts.

// ! Events
//PlayAgain.addEventLister('click', resetGame)

// ! page Load