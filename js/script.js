/*----- constants -----*/
const COLORS = {
    '0': null,
    '1': 'X',
    '-1': 'O'
}

/*----- state variables -----*/
let board 
let turn
let winner

/*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button')

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', restartGame)

/*----- functions -----*/
init()

function init() {
    // rotate 90 degrees counter clockwise to visualize the boards mapping to the DOM
    board = [ 
        [0, 0, 0],  // t7, t4, t1
        [0, 0, 0],  // t8, t5, t2
        [0, 0, 0], // t9, t6, t3
    ]
    turn = 1   // X's turn first
    winner = null
    render()
}

function render() {
    
}

function restartGame() {
    init()
}